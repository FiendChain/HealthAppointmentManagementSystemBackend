from backend import app as backend_app
import threading

backend_deploy_config = {
    'host': 'localhost',
    'port': 5000,
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
    'port': 4200,
    'debug': True,
}

def start_servers():
    backend_thread = threading.Thread(target=lambda: backend_app.run(**backend_deploy_config))
    backend_thread.setDaemon(True)
    backend_thread.start()
    return backend_thread

def start_servers_with_debug():
    backend_app.run(**backend_test_config)