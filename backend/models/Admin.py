from .User import User
from sqlalchemy import Column, Integer, ForeignKey

class Admin(User):
    __tablename__ = 'admin'

    __mapper_args__ = {
        'polymorphic_identity': 'admin',
    }

    id = Column(Integer, ForeignKey('user.id'), primary_key=True)

    def __init__(self, name, password, email, phone):
        super().__init__(name, password, email, phone)

    @property
    def is_admin(self):
        return True