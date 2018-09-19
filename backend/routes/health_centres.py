from . import app, models, session
from .security import admin_required
from .utility import get_model_instance_by_id
from flask import request, jsonify
from flask_login import login_required, current_user
from sqlalchemy.exc import IntegrityError


@app.route('/health_centres', methods=['GET'])
def get_health_centres():
    health_centres = session.query(models.HealthCentre).all()
    return jsonify(health_centres)


@app.route('/health_centres', methods=['POST'])
@login_required
@admin_required
def add_health_centre():
    form_data = {
        'name': request.form.get('name', '').strip(),
        'address': request.form.get('address', '').strip(),
    }
    try:
        health_centre = models.HealthCentre(**form_data)
        session.add(health_centre)
        session.commit()
        return jsonify(health_centre)
    except IntegrityError:
        return jsonify("Credentials already taken"), 400
    except Exception as ex:
        return jsonify(ex), 400

@app.route('/health_centres/<id>', methods=['GET'])
@login_required
@get_model_instance_by_id(models.HealthCentre)
def get_health_centre(health_centre):
    return jsonify(health_centre)

@app.route('/health_centres/<id>', methods=['PATCH'])
@login_required
@admin_required
@get_model_instance_by_id(models.HealthCentre)
def patch_health_centre(health_centre):
    try:
        health_centre.update_from_form(request.form)
        session.commit()
        return jsonify(health_centre)
    except IntegrityError:
        return jsonify("Credentials already taken"), 400
    except Exception as ex:
        return jsonify(ex), 400

@app.route('/health_centres/<id>', methods=['DELETE'])
@login_required
@admin_required
@get_model_instance_by_id(models.HealthCentre)
def delete_health_centre(health_centre):
    session.delete(health_centre)
    session.commit()
    return jsonify("Deleted health centre")


