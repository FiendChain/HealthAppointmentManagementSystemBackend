from . import app, models, session
from .utility import get_model_instance_by_id, get_model_by_id
from flask import request, jsonify
from flask_login import login_required

def check_rating_exists(rating):
    ratings = session.query(models.ProviderRating)\
        .filter(models.ProviderRating.patient_id == rating.patient.id)\
        .filter(models.ProviderRating.provider_id == rating.provider.id)\
        .filter(models.ProviderRating.id != rating.id)\
        .all()
    if ratings:
        raise ValueError('Rating already exists')

@app.route('/provider_ratings', methods=['GET'])
@login_required
def get_provider_ratings():
    provider_ratings = session.query(models.ProviderRating).all()
    return jsonify(provider_ratings)

@app.route('/provider_ratings', methods=['POST'])
@login_required
def add_provider_rating():
    form_data = {
        'provider': get_model_by_id(models.Provider, request.form.get('provider_id')),
        'patient': get_model_by_id(models.Patient, request.form.get('patient_id')),
        'rating': request.form.get('rating'),
        'comment': request.form.get('comment'),
    }
    try:
        provider_rating = models.ProviderRating(**form_data)
        check_rating_exists(provider_rating)
        session.add(provider_rating)
        session.commit()
        return jsonify(provider_rating)
    except Exception as ex:
        return jsonify(ex), 400

@app.route('/provider_ratings/<id>', methods=['GET'])
@login_required
@get_model_instance_by_id(models.ProviderRating)
def get_provider_rating(provider_rating):
    return jsonify(provider_rating)

@app.route('/provider_ratings/<id>', methods=['PATCH'])
@login_required
@get_model_instance_by_id(models.ProviderRating)
def patch_provider_rating(provider_rating):
    try:
        provider_rating.update_from_form(request.form)
        check_rating_exists(provider_rating)
        session.commit()
        return jsonify(provider_rating)
    except Exception as ex:
        return jsonify(ex), 400

@app.route('/provider_ratings/<id>', methods=['DELETE'])
@login_required
@get_model_instance_by_id(models.ProviderRating)
def delete_provider_rating(provider_rating):
    try:
        provider = provider_rating.provider
        session.delete(provider_rating)
        session.commit()
        provider.update_rating()
        session.commit()
        return jsonify("Deleted provider rating")
    except Exception as ex:
        return jsonify("Couldn't delete provider rating"), 400