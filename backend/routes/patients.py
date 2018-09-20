from . import app, models, session
from .utility import get_model_instance_by_id
from flask import request, jsonify, abort
from flask_login import login_required, current_user
from sqlalchemy.exc import IntegrityError

@app.route('/patients', methods=["GET"])
@login_required
def get_patients():
    if current_user.is_admin or current_user.is_provider:
        patients = session.query(models.Patient).all()
        return jsonify(patients)
    else:
        abort(403)

@app.route('/patients', methods=["POST"])
def add_patient():
    form_data = {
        'name': request.form.get('name'), 
        'password': request.form.get('password'),
        'email': request.form.get('email'),
        'phone': request.form.get('phone'),
        'medicare': request.form.get('medicare'),
    } 
    try:
        patient = models.Patient(**form_data)
        session.add(patient)
        session.commit()
        return jsonify(patient)
    except IntegrityError as ex:
        return jsonify('Credentials already taken'), 400
    except Exception as ex:
        return jsonify(ex), 400
        
@app.route('/patients/<id>', methods=['GET'])
@login_required
@get_model_instance_by_id(models.Patient)
def get_patient(patient):
    if current_user.is_admin or current_user.is_provider:
        return jsonify(patient)
    elif current_user.is_patient and current_user.id == patient.id:
        patient_data = patient.to_json()
        patient_data['password'] = patient.password
        return jsonify(patient_data)
    else:
        abort(403)

@app.route('/patients/<id>', methods=['DELETE'])
@login_required
@get_model_instance_by_id(models.Patient)
def delete_patient(patient):
    session.delete(patient)
    session.commit()
    return jsonify("Deleted patient")

@app.route('/patients/<id>', methods=['PATCH'])
@login_required
@get_model_instance_by_id(models.Patient)
def patch_patient(patient):
    try:
        patient.update_from_form(request.form)
        session.commit()
        return jsonify(patient)
    except Exception as ex:
        return jsonify(ex), 400



