from . import app
from flask import jsonify, make_response, request

@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({
        'error': True, 
        'msg': 'Method not allowed', 
        'method': request.method,
        'url': request.path,
    }), error.code

@app.errorhandler(404)
def page_not_found(error):
    return jsonify({
        'error': True,
        'msg': 'Page not found',
        'url': request.path,
    }), error.code

@app.errorhandler(401)
def authorization_required(error):
    return jsonify({
        'error': True,
        'msg': 'Authorization required',
        'url': request.path,
    }), error.code