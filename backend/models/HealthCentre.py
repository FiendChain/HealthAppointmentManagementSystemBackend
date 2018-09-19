from .database import Base
from .JSONable import JSONable
from .RestfulModel import RestfulModel
from .RatedModel import RatedModel
from sqlalchemy import ForeignKey, Integer, String, Column, Float 
from sqlalchemy.orm import relationship 


class HealthCentre(Base, RestfulModel, RatedModel):
    __tablename__ = 'health_centre'

    __PATCH__ = ['name', 'address']

    id = Column(Integer, primary_key=True)
    _name = Column('name', String, unique=True)
    _address = Column('address', String)
    _rating = Column('rating', Float)
    ratings = relationship('HealthCentreRating', back_populates='_health_centre')
    providers = relationship('Provider', back_populates='_health_centre')
    # address_id = Column(Integer, ForeignKey('address.id'))
    # _address = relationship('Address')

    def __init__(self, name, address):
        RatedModel.__init__(self)
        self.name = name
        self.address = address

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        if not name:
            raise ValueError('Name must be specified')
        self._name = name

    @property
    def address(self):
        return self._address

    @address.setter
    def address(self, address):
        if not address:
            raise ValueError('Address must be specified')
        self._address = address

    def to_json(self):
        base = RatedModel.to_json(self)
        base.update({
            'id': self.id,
            'address': self.address,
            'name': self.name,
            'providers': self.providers,
        })
        return base