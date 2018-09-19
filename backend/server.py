from flask import Flask
from flask_login import LoginManager
from flask_cors import CORS

from . import models

class AppConfig:
    import datetime
    DEBUG = True
    TESTING = True
    PERMANENT_SESSION_LIFETIME = datetime.timedelta(minutes=30)


app = Flask(__name__) 
CORS(app, supports_credentials=True)
app.secret_key = 'md5a5'
app.json_encoder = models.CustomJSONEncoder
app.config.from_object(AppConfig)
login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    user = models.session.query(models.User).get(user_id)
    return user