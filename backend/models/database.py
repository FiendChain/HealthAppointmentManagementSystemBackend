from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session

engine = create_engine("sqlite:///resources/database.db")
Base = declarative_base()

# session
Session = sessionmaker(autocommit=False,
                       autoflush=False,
                       bind=engine)
session = scoped_session(Session)

def init_database():
    Base.metadata.create_all(bind=engine)