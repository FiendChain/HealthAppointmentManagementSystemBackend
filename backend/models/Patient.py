from .User import User  
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

MEDICARE_DIGITS = 10

class Patient(User):
    __tablename__ = 'patient'

    __mapper_args__ = {
        'polymorphic_identity': 'patient',
    }

    __PATCH__ = ['medicare'] + User.__PATCH__

    id = Column(Integer, ForeignKey('user.id'), primary_key=True)
    _medicare = Column('medicare', String)
    appointments = relationship("Appointment", back_populates='_patient')
    provider_ratings = relationship("ProviderRating", back_populates='_patient')
    health_centre_ratings = relationship("HealthCentreRating", back_populates='_patient')

    def __init__(self, name, password, email, phone, medicare):
        super().__init__(name, password, email, phone)
        self.medicare = medicare

    @property
    def is_patient(self):
        return True

    @property
    def medicare(self):
        return self._medicare

    @medicare.setter
    def medicare(self, medicare):
        if not medicare:
            raise ValueError('Must specify medicare')
        if len(medicare) is not MEDICARE_DIGITS:
            raise ValueError('Medicare must have {} digits'.format(MEDICARE_DIGITS))
        self._medicare = medicare 

    def to_json(self):
        base = super().to_json()
        base.update({
            'medicare': self.medicare,
            'appointments': self.appointments,
            'provider_ratings': self.provider_ratings,
            'health_centre_ratings': self.health_centre_ratings,
        })
        return base

