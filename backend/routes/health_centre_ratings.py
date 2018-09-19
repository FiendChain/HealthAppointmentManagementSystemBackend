from . import app, models, session
from .utility import get_model_instance_by_id, get_model_by_id
from flask import request, jsonify
from flask_login import login_required
import sqlalchemy 

def check_rating_exists(rating):
    ratings = session.query(models.HealthCentreRating)\
        .filter(models.HealthCentreRating.patient_id == rating.patient.id)\
        .filter(models.HealthCentreRating.health_centre_id == rating.health_centre.id)\
        .filter(models.HealthCentreRating.id != rating.id)\
        .all()
    if ratings:
        raise ValueError('Rating already exists')

@app.route('/health_centre_ratings', methods=['GET'])
@login_required
def get_health_centre_ratings():
    health_centre_ratings = session.query(models.HealthCentreRating).all()
    return jsonify(health_centre_ratings)

@app.route('/health_centre_ratings', methods=['POST'])
@login_required
def add_health_centre_rating():
    form_data = {
        'health_centre': get_model_by_id(models.HealthCentre, request.form.get('health_centre_id')),
        'patient': get_model_by_id(models.Patient, request.form.get('patient_id')),
        'rating': request.form.get('rating'),
        'comment': request.form.get('comment'),
    }
    try:
        health_centre_rating = models.HealthCentreRating(**form_data)
        check_rating_exists(health_centre_rating)
        session.add(health_centre_rating)
        session.commit()
        return jsonify(health_centre_rating)
    except Exception as ex:
        return jsonify(ex), 400

@app.route('/health_centre_ratings/<id>', methods=['GET'])
@login_required
@get_model_instance_by_id(models.HealthCentreRating)
def get_health_centre_rating(health_centre_rating):
    return jsonify(health_centre_rating)

@app.route('/health_centre_ratings/<id>', methods=['PATCH'])
@login_required
@get_model_instance_by_id(models.HealthCentreRating)
def patch_health_centre_rating(health_centre_rating):
    try:
        health_centre_rating.update_from_form(request.form)
        check_rating_exists(health_centre_rating)
        session.commit()
        return jsonify(health_centre_rating)
    except Exception as ex:
        return jsonify(ex), 400

@app.route('/health_centre_ratings/<id>', methods=['DELETE'])
@login_required
@get_model_instance_by_id(models.HealthCentreRating)
def delete_health_centre_rating(health_centre_rating):
    try:
        health_centre = health_centre_rating.health_centre
        session.delete(health_centre_rating)
        session.commit()
        health_centre.update_rating()
        session.commit()
        return jsonify("Deleted health_centre rating")
    except Exception as ex:
        return jsonify("Couldn't delete health_centre rating"), 400