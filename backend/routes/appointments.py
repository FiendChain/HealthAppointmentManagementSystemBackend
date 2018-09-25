from . import app, models, session
from .utility import get_model_instance_by_id, get_model_by_id
from flask import request, jsonify
from flask_login import login_required, current_user
import datetime
import sqlalchemy


def check_time_intersect(start_x, end_x, start_y, end_y):
    return (start_y <= start_x and start_x < end_y) or\
           (start_y < end_x and end_x <= end_y)

def get_potential_conflicts(appointment):
    return session.query(models.Appointment)\
        .filter(models.Appointment.id != appointment.id)\
        .filter(sqlalchemy.or_(
            models.Appointment._patient == appointment.patient,
            models.Appointment._provider == appointment.provider))\
        .all()

def get_conflict_message(src, conflict):
    if current_user.is_admin:
        return "Appointment time slot has been taken already"
    elif current_user.is_patient:
        if src.provider == conflict.provider:
            return "Provider {} has an appointment at this time".format(conflict.provider.name)
        return "You have an appointment with provider {} at this time".format(conflict.provider.name)
    else:
        if src.patient == conflict.patient:
            return "Patient {} has an appointment with provider {} at this time"\
                .format(conflict.patient.name, conflict.provider.name)
        return "You have an appointment with patient {} at this time".format(conflict.patient.name)


def check_conflicts(src_appointment):
    for appointment in get_potential_conflicts(src_appointment):
        if check_time_intersect(src_appointment.start_time, src_appointment.end_time,
                                appointment.start_time, appointment.end_time):
            raise ValueError(get_conflict_message(src_appointment, appointment))

@app.route('/appointments', methods=['GET'])
@login_required
def get_appointments():
    if current_user.is_admin:
        appointments = session.query(models.Appointment).all()
    else:
        appointments = current_user.appointments
    return jsonify(appointments)

@app.route('/appointments', methods=['POST'])
@login_required
def add_appointment():
    form_data = {
        'provider': get_model_by_id(models.Provider, request.form.get('provider_id')),
        'patient': get_model_by_id(models.Patient, request.form.get('patient_id')),
        'start_time': request.form.get('start_time'),
        'end_time': request.form.get('end_time'),
        'reason': request.form.get('reason'),
        'comment': request.form.get('comment'),
    }
    try:
        appointment = models.Appointment(**form_data)
        check_conflicts(appointment)
        session.add(appointment)
        session.commit()
        return jsonify(appointment)
    except Exception as ex:
        return jsonify(ex), 400

@app.route('/appointments/<id>', methods=['GET'])
@login_required
@get_model_instance_by_id(models.Appointment)
def get_appointment(appointment):
    return jsonify(appointment)

@app.route('/appointments/<id>', methods=['PATCH'])
@login_required
@get_model_instance_by_id(models.Appointment)
def patch_appointment(appointment):
    form_data = request.form.to_dict()
    patient_id = form_data.pop('patient_id', None)
    if patient_id:
        form_data['patient'] = get_model_by_id(models.Patient, patient_id)
    provider_id = form_data.pop('provider_id', None)
    if provider_id:
        form_data['provider'] = get_model_by_id(models.Provider, provider_id)
    try:
        appointment.update_from_form(form_data)
        appointment.validate_time()
        check_conflicts(appointment)
        session.commit()
        return jsonify(appointment)
    except Exception as ex:
        return jsonify(ex), 400

@app.route('/appointments/<id>', methods=['DELETE'])
@login_required
@get_model_instance_by_id(models.Appointment)
def delete_appointment(appointment):
    try:
        session.delete(appointment)
        session.commit()
        return jsonify("Deleted appointment")
    except Exception as ex:
        return jsonify("Couldn't delete appointment"), 400




