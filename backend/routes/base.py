from . import app, models, session
from flask import request, jsonify, abort
from flask import session as flask_session
from flask_login import login_user, logout_user, login_required, current_user
from sqlalchemy.exc import IntegrityError

@app.teardown_request
def remove_session(ex=None):
    session.remove()

@app.route('/login', methods=["POST"])
def login():
    email = request.form.get('email', '').strip()
    password = request.form.get('password', '').strip()
    if not email:
        return jsonify("Email must be provided"), 400
    elif not password:
        return jsonify("Password must be specified"), 400
    # filter and check
    user = session.query(models.User)\
        .filter(models.User._email == email)\
        .filter(models.User._password == password)\
        .first()
    if user:
        logout_user()
        flask_session.permanent = True
        login_user(user)
        return jsonify(user)
    else:
        return jsonify('Incorrect credentials'), 400

@app.route('/login', methods=['GET'])
@login_required
def check_login():
    user = session.query(models.User).get(current_user.id)
    return jsonify(user)



@app.route('/logout', methods=["GET", "POST"])
@login_required
def logout():
    logout_user()
    return jsonify('Logged out'), 200

@app.login_manager.unauthorized_handler
def unauthorized_handler():
    return jsonify('Authorisation is required to access this page'), 401