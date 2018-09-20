from backend import app as backend_app
from frontend import app as frontend_app
import threading

backend_deploy_config = {
    'host': 'localhost',
    'port': 32450,
    'debug': False,
}

backend_test_config = {
    'host': 'localhost',
    'port': 5000,
    'debug': True
}

virtual_server = {
    'host': '192.168.1.10',
    'port': 5000,
    'debug': True,
}

frontend_config = {
    'host': 'localhost',
    'port': 32500,
    'debug': False,
}

def start_servers():
    backend_thread = threading.Thread(target=lambda: backend_app.run(**backend_deploy_config))
    backend_thread.setDaemon(True)
    frontend_thread = threading.Thread(target=lambda: frontend_app.run(**frontend_config))
    backend_thread.start()
    frontend_thread.start()
    return (backend_thread, frontend_thread)

def start_servers_with_debug():
    backend_app.run(**backend_test_config)