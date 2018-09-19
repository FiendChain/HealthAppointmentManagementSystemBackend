from .database import Base
from .Rating import Rating
from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship

class HealthCentreRating(Rating):
    __tablename__ = 'health_centrer_rating'

    __mapper_args__ = {
        'polymorphic_identity': 'health_centre_rating',
    }

    __PATCH__ = ['patient', 'health_centre'] + Rating.__PATCH__

    id = Column(Integer, ForeignKey('rating.id'), primary_key=True)
    patient_id = Column(Integer, ForeignKey('patient.id'))
    health_centre_id = Column(Integer, ForeignKey('health_centre.id'))
    _patient = relationship("Patient", back_populates='health_centre_ratings')
    _health_centre = relationship("HealthCentre", back_populates='ratings')

    def __init__(self, patient, health_centre, rating, comment):
        self.patient = patient
        self.health_centre = health_centre
        super().__init__(rating, comment)

    def after_rating(self):
        self.health_centre.update_rating()

    @property
    def health_centre(self):
        return self._health_centre

    @health_centre.setter
    def health_centre(self, health_centre):
        if not health_centre:
            raise ValueError("Health centre must be provided")
        self._health_centre = health_centre

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
            'health_centre_id': self.health_centre_id,
            'health_centre_name': self.health_centre.name,
        })
        return base