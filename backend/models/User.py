from .database import Base, engine
from .JSONable import JSONable
from .RestfulModel import RestfulModel

from sqlalchemy import Column, String, Integer
from flask_login import UserMixin

class User(Base, UserMixin, JSONable, RestfulModel):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    _name = Column('name', String)
    _password = Column('password', String)
    _email = Column('email', String, unique=True)
    _phone = Column('phone', String, unique=True)

    __mapper_args__ = {
        'polymorphic_identity': 'user',
        'polymorphic_on': type
    }

    __PATCH__ = ['name', 'password', 'email', 'phone']

    def __init__(self, name, password, email, phone):
        self.name = name
        self.password = password
        self.email = email
        self.phone = phone

    def __str__(self):
        return "<User object email:{}, admin:{}>".format(self.email, self.is_admin)

    # flask login usermixin
    @property
    def is_authenticated(self):
        return True

    @property
    def is_active(self):
        return True

    @property
    def is_anonymous(self):
        return False

    # user types
    @property
    def is_patient(self):
        return False
    
    @property
    def is_provider(self):
        return False

    @property
    def is_admin(self):
        return False

    # user properties
    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        if not name:
            raise ValueError("Name must be specified")
        self._name = name

    @property
    def password(self):
        return self._password
    
    @password.setter
    def password(self, password):
        if not password:
            raise ValueError("Password must be specified")
        elif len(password) < 6:
            raise ValueError("Password must have ast least 6 characters")
        self._password = password

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, email):
        if not email:
            raise ValueError('Email must be specified')
        self._email = email

    @property
    def phone(self):
        return self._phone

    @phone.setter
    def phone(self, phone):
        if not phone:
            raise ValueError('Phone must be provided')
        elif len(phone) != 8:
            raise ValueError('Phone number must have 8 digits')
        try:
            phone = int(phone)
        except Exception as ex:
            raise ValueError('Phone number must contain only digits')
        self._phone = phone

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'type': self.type,
            'is_admin': self.is_admin,
            'is_patient': self.is_patient,
            'is_provider': self.is_provider,
        }
    
        
    
