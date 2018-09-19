from .Rating import MIN_RATING, MAX_RATING
from .JSONable import JSONable
from abc import abstractmethod, abstractproperty

DEFAULT_RATING = (MIN_RATING+MAX_RATING)/2.0

class RatedModel(JSONable):
    
    _rating = DEFAULT_RATING
    ratings = []

    def __init__(self, rating=DEFAULT_RATING):
        self.rating = rating

    @property
    def rating(self):
        return self._rating

    @rating.setter
    def rating(self, rating):
        if rating < MIN_RATING:
            raise ValueError('Average provider rating cannot be less than {}'.format(MIN_RATING))
        elif rating > MAX_RATING:
            raise ValueError('Average provider rating cannot be greater than {}'.format(MAX_RATING))
        self._rating = rating

    def update_rating(self):
        if len(self.ratings) <= 0:
            self.rating = DEFAULT_RATING
        else:
            total = sum(rating.rating for rating in self.ratings)
            average = total / len(self.ratings)
            self.rating = average

    def to_json(self):
        return {
            'rating': self.rating,
        }