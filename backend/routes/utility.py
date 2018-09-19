from . import session
from functools import wraps

def get_model_instance_by_id(cls, error="Object doesn't exist"):
    def decorator(func):
        @wraps(func)
        def wrapper(id):
            obj = get_model_by_id(cls, id)
            if not obj:
                return jsonify(error), 400
            return func(obj)
        return wrapper
    return decorator

def get_model_by_id(cls, id):
    if not id or not cls:
        return None
    return session.query(cls).get(id)