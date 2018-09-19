# users
from .User import User
from .Admin import Admin
from .Provider import Provider
from .Patient import Patient
# health centre
from .HealthCentre import HealthCentre
# associations
from .Rating import Rating
from .ProviderRating import ProviderRating
from .HealthCentreRating import HealthCentreRating
from .Appointment import Appointment
# metadata
from .Address import Address

# json encoder
from .JSONable import CustomJSONEncoder

# init database
from .database import session, engine, init_database
from sqlalchemy.exc import IntegrityError
init_database()
try:
    admin = Admin('admin', 'password', 'admin', '00000000')
    session.add(admin)
    session.commit()
except IntegrityError:
    pass

