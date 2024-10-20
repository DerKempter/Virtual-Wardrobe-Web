from flask import Flask, request, jsonify
from PIL import Image
import sqlite3
import io

app = Flask("Virtual Wardrobe Web")

@app.route('/', methods=['GET'])
def hello_world():
    return jsonify({'result': 'hello world!'})

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)