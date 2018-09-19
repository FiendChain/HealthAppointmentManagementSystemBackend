from .User import User
from .RatedModel import RatedModel
from sqlalchemy import Column, String, Integer, ForeignKey, Float
from sqlalchemy.orm import relationship

PROVIDER_TYPES = ['General Practitioner', 'Physiotherapist', 'Pathologist', 'Pharmacist']

class Provider(User, RatedModel):
    __tablename__ = 'provider'

    __mapper_args__ = {
        'polymorphic_identity': 'provider',
    }

    __PATCH__ = ['provider_number', 'provider_type', 'health_centre'] + User.__PATCH__

    id = Column(Integer, ForeignKey('user.id'), primary_key=True)
    _provider_number = Column('provider_number', Integer, unique=True)
    _provider_type = Column('provider_type', String)
    _rating = Column('rating', Float)
    health_centre_id = Column(Integer, ForeignKey('health_centre.id'))
    _health_centre = relationship('HealthCentre', back_populates='providers')
    appointments = relationship('Appointment', back_populates='_provider')
    ratings = relationship('ProviderRating', back_populates='_provider')

    def __init__(self, name, password, email, phone, 
                 provider_number, provider_type, health_centre):
        User.__init__(self, name, password, email, phone)
        RatedModel.__init__(self)
        self.provider_number = provider_number
        self.provider_type = provider_type
        self.health_centre = health_centre

    @property
    def is_provider(self):
        return True

    @property
    def provider_number(self):
        return self._provider_number

    @provider_number.setter
    def provider_number(self, provider_number):
        if not provider_number:
            raise ValueError("Provider number must be specified")
        elif len(provider_number) < 10:
            raise ValueError("Provider number must have 10 characters")
        self._provider_number = provider_number

    @property
    def provider_type(self):
        return self._provider_type

    @provider_type.setter
    def provider_type(self, provider_type):
        if not provider_type:
            raise ValueError('Provided type must be specified')
        elif provider_type not in PROVIDER_TYPES:
            raise ValueError('Valid types are: {}'.format(PROVIDER_TYPES))
        self._provider_type = provider_type

    @property
    def health_centre(self):
        return self._health_centre

    @health_centre.setter
    def health_centre(self, health_centre):
        if not health_centre:
            raise ValueError('Health centre must be specified')
        self._health_centre = health_centre

    @property
    def patients(self):
        return [appointment.patient for appointment in self.appointments]

    def to_json(self):
        base = RatedModel.to_json(self)
        base.update(User.to_json(self))
        base.update({
            'health_centre_id': self.health_centre_id,
            'provider_number': self.provider_number,
            'provider_type': self.provider_type,
            'appointments': self.appointments,
            'ratings': self.ratings,
        })
        if self.health_centre:
            base.setdefault('health_centre_name', self.health_centre.name)
        return base