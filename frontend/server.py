from flask import Flask, render_template, redirect, send_from_directory

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/assets/<filename>', methods=['GET'])
def assets(filename):
    return send_from_directory('assets', filename)

@app.errorhandler(404)
def index_reroute(err):
    return render_template('index.html')