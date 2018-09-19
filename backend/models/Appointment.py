from .database import Base, session
from .JSONable import JSONable
from .RestfulModel import RestfulModel
import datetime
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship

TIME_FORMAT = "%d/%m/%y %H:%M"

class Appointment(Base, JSONable, RestfulModel):
    __tablename__ = 'appointment'

    __PATCH__ = ['patient', 'provider', 'start_time', 'end_time', 'reason', 'comment'] 

    id = Column(Integer, primary_key=True)
    patient_id = Column(Integer, ForeignKey('patient.id'))
    provider_id = Column(Integer, ForeignKey('provider.id'))
    _start_time = Column('start_time', DateTime)
    _end_time = Column('end_time', DateTime)
    _reason = Column('reason', String)
    _comment = Column('comment', String)
    _patient = relationship("Patient", back_populates='appointments')
    _provider = relationship("Provider", back_populates='appointments')

    def __init__(self, patient, provider, start_time, end_time, reason, comment=None):
        self.patient = patient
        self.provider = provider
        self.start_time = start_time
        self.end_time = end_time
        self.reason = reason
        self.comment = comment

    # appointment times
    @property
    def start_time(self):
        return self._start_time

    @start_time.setter
    def start_time(self, start_time):
        if not start_time:
            raise ValueError("Start time must be provided")
        try:
            time = datetime.datetime.strptime(start_time, TIME_FORMAT)
        except Exception as ex:
            raise ValueError("Start time must be in the format \'{}\'".format(TIME_FORMAT))
        if time.minute != 0 and time.minute != 30:
            raise ValueError("Invalid start time, minutes must be 0 or 30")
        elif self.end_time:
            time_delta = self.end_time - time
            if time_delta.seconds/60 != 30:
                raise ValueError("Appointment must be a 30 minute slot") 
        self._start_time = time

    @property
    def end_time(self):
        return self._end_time

    @end_time.setter
    def end_time(self, end_time):
        if not end_time:
            raise ValueError("End time must be provided")
        try:
            time = datetime.datetime.strptime(end_time, TIME_FORMAT)
        except Exception as ex:
            raise ValueError("End time must be in the format \'{}\'".format(TIME_FORMAT))
        if time.minute != 0 and time.minute != 30:
            raise ValueError("Invalid end time, minutes must be 0 or 30")
        elif self.start_time:
            time_delta = time - self.start_time
            if time_delta.seconds/60 != 30:
                raise ValueError("Appointment must be a 30 minute slot") 
        self._end_time = time

    # other properties
    @property
    def reason(self):
        return self._reason

    @reason.setter
    def reason(self, reason):
        if not reason:
            raise ValueError('Reason must be provided')
        elif len(reason) > 100:
            raise ValueError('Reason must be less than 100 characters')
        self._reason = reason

    @property
    def comment(self):
        return self._comment
    
    @comment.setter
    def comment(self, comment):
        self._comment = comment

    @property
    def provider(self):
        return self._provider

    @provider.setter
    def provider(self, provider):
        if not provider:
            raise ValueError("Provider must be provided")
        self._provider = provider

    @property
    def patient(self):
        return self._patient

    @patient.setter
    def patient(self, patient):
        if not patient:
            raise ValueError("Patient must be provided")
        self._patient = patient

    def to_json(self):
        return {
            'id': self.id,
            'provider_id': self.provider_id,
            'provider_name': self.provider.name,
            'patient_id': self.patient_id,
            'patient_name': self.patient.name,
            'comment': self.comment,
            'reason': self.reason,
            'start_time': datetime.datetime.strftime(self.start_time, TIME_FORMAT),
            'end_time': datetime.datetime.strftime(self.end_time, TIME_FORMAT),
        }

    
    
