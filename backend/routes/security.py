from . import app
from flask import jsonify
from flask_login import current_user
from functools import wraps

def admin_required(func):
    @wraps(func)
    def decorator(*args, **kwargs):
        if current_user.is_admin:
            return func(*args, **kwargs)
        return jsonify('Admin required'), 403
    return decorator