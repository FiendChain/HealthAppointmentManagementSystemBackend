from .database import Base
from .JSONable import JSONable
from .RestfulModel import RestfulModel
from sqlalchemy import Column, Integer, String, ForeignKey, Float
from sqlalchemy.orm import relationship

MIN_RATING = 0
MAX_RATING = 5

class Rating(Base, JSONable, RestfulModel):
    __tablename__ = 'rating'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    _rating = Column('rating', Float)
    _comment = Column('comment', String)

    __mapper_args__ = {
        'polymorphic_identity': 'rating',
        'polymorphic_on': type
    }

    __PATCH__ = ['rating', 'comment']

    def __init__(self, rating, comment):
        self.rating = rating
        self.comment = comment

    @property
    def rating(self):
        return self._rating

    @rating.setter
    def rating(self, rating):
        if not rating:
            raise TypeError('Rating must be provided')
        rating = float(rating)
        if rating < MIN_RATING:
            raise ValueError('Rating must be greater than {}'.format(MIN_RATING))
        elif rating > MAX_RATING:
            raise ValueError('Rating must be less than {}'.format(MAX_RATING))
        self._rating = rating
        self.after_rating()

    def after_rating(self):
        print('raw dog')
        return

    @property
    def comment(self):
        return self._comment

    @comment.setter
    def comment(self, comment):
        if comment and len(comment) > 100:
            raise ValueError('Comment must be below 100 characters')
        self._comment = comment

    def to_json(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'comment': self.comment,
        }