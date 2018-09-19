from .database import Base
from .JSONable import JSONable
from .RestfulModel import RestfulModel
from sqlalchemy import Integer, Column, String

class Address(Base, RestfulModel, JSONable):
    __tablename__ = 'address'

    __PATCH__ = ['street', 'suburb', 'state', 'country']

    id = Column(Integer, primary_key=True)
    _street = Column('street', String)
    _suburb = Column('suburb', String)
    _state = Column('state', String)
    _country = Column('country', String)

    def __init__(self, street, suburb, state='NSW', country='Australia'):
        self.street = street
        self.suburb = suburb
        self.state = state
        self.country = country

    @property
    def street(self):
        return self._street

    @street.setter
    def street(self, street):
        if not street:
            raise ValueError('Street must be specified')
        elif len(street) < 3:
            raise ValueError('Street address too short')
        self._street = street

    @property
    def suburb(self):
        return self._suburb

    @suburb.setter
    def suburb(self, suburb):
        if not suburb:
            raise ValueError('Suburb must be specified')
        elif len(suburb) < 3:
            raise ValueError('Suburb name too short')
        self._suburb = suburb

    @property
    def state(self):
        return self._state

    @state.setter
    def state(self, state):
        if not state:
            raise ValueError('State must be specified')
        elif len(state) < 3:
            raise ValueError('State name too short')
        self._state = state
    
    @property
    def country(self):
        return self._country

    @country.setter
    def country(self, country):
        if not country:
            raise ValueError('Country must be specified')
        elif len(country) < 3:
            raise ValueError('Country name too short')
        self._country = country

    