from . import app, models, session
from .utility import get_model_instance_by_id, get_model_by_id
from flask import request, jsonify
from flask_login import login_required, current_user
from sqlalchemy.exc import IntegrityError

@app.route('/providers', methods=["GET"])
@login_required
def get_providers():
    providers = session.query(models.Provider).all()
    return jsonify(providers)

@app.route('/providers', methods=["POST"])
def add_provider():
    form_data = {
        'name': request.form.get('name'), 
        'password': request.form.get('password'),
        'email': request.form.get('email'),
        'phone': request.form.get('phone'),
        'provider_number': request.form.get('provider_number'),
        'provider_type': request.form.get('provider_type'),
        'health_centre': get_model_by_id(models.HealthCentre, request.form.get('health_centre_id')),
    } 
    try:
        provider = models.Provider(**form_data)
        session.add(provider)
        session.commit()
        return jsonify(provider)
    except IntegrityError as ex:
        return jsonify('Credentials already taken'), 400
    except Exception as ex:
        return jsonify(ex), 400
        
@app.route('/providers/<id>', methods=['GET'])
@login_required
@get_model_instance_by_id(models.Provider, "Provider doesn't exist")
def get_provider(provider):
    if current_user.is_admin:
        return jsonify(provider)
    # if provider, check if own profile
    elif current_user.is_provider:
        if current_user.id == provider.id: # if own profile add password
            provider_data = provider.to_json()
            provider_data['password'] = provider.password
            return jsonify(provider_data)
        return jsonify(provider)
    # filter out other appointments that arent the patient's
    provider_data = provider.to_json()
    provider_appointments = provider_data.get('appointments', [])
    filtered_appointments = []
    for appointment in provider_appointments:
        if appointment.patient_id == current_user.id:
            filtered_appointments.append(appointment)
    provider_data['appointments'] = filtered_appointments
    return jsonify(provider_data)


@app.route('/providers/<id>', methods=['DELETE'])
@login_required
@get_model_instance_by_id(models.Provider, "Provider doesn't exist")
def delete_provider(provider): 
    try:
        session.delete(provider)
        session.commit()
        return jsonify("Deleted provider")
    except Exception as ex:
        return jsonify(ex), 400


@app.route('/providers/<id>', methods=['PATCH'])
@login_required
@get_model_instance_by_id(models.Provider, "Provider doesn't exist")
def patch_provider(provider):  
    form_data = request.form.to_dict()
    health_centre_id = form_data.pop('health_centre_id', None)
    if health_centre_id:
        form_data['health_centre'] = get_model_by_id(models.HealthCentre, health_centre_id)
    try:
        provider.update_from_form(form_data)
        session.commit()
        return jsonify(provider)
    except Exception as ex:
        return jsonify(ex), 400





