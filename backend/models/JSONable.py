from abc import abstractmethod
from flask.json import JSONEncoder

class JSONable:
    @abstractmethod
    def to_json(self):
        pass

class CustomJSONEncoder(JSONEncoder):
    def default(self, obj):
        try:
            if isinstance(obj, JSONable):
                return obj.to_json()
            elif isinstance(obj, Exception):
                return str(obj)
            iterable = iter(obj)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj) 

