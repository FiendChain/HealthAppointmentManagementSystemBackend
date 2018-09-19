from .database import Base
from .Rating import Rating
from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship

class ProviderRating(Rating):
    __tablename__ = 'provider_rating'

    __mapper_args__ = {
        'polymorphic_identity': 'provider_rating',
    }

    __PATCH__ = ['patient', 'provider'] + Rating.__PATCH__

    id = Column(Integer, ForeignKey('rating.id'), primary_key=True)
    patient_id = Column(Integer, ForeignKey('patient.id'))
    provider_id = Column(Integer, ForeignKey('provider.id'))
    _patient = relationship("Patient", back_populates='provider_ratings')
    _provider = relationship("Provider", back_populates='ratings')

    def __init__(self, patient, provider, rating, comment):
        self.patient = patient
        self.provider = provider
        super().__init__(rating, comment)

    def after_rating(self):
        self.provider.update_rating()

    @property
    def provider(self):
        return self._provider

    @provider.setter
    def provider(self, provider):
        if not provider:
            raise ValueError("Provider must be provided")
        self._provider = provider

    @property
    def patient(self):
        return self._patient

    @patient.setter
    def patient(self, patient):
        if not patient:
            raise ValueError("Patient must be provided")
        self._patient = patient

    def to_json(self):
        base = super().to_json()
        base.update({
            'patient_id': self.patient_id,
            'patient_name': self.patient.name,
            'provider_id': self.provider_id,
            'provider_name': self.provider.name,
        })
        return base