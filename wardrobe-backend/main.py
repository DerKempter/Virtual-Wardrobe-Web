from flask import Flask, request, jsonify
from PIL import Image
import io

import db

app = Flask("Virtual Wardrobe Web")

@app.route('/test-route', methods=['GET'])
def hello_world():
    err_coll = []
    try:
        _id = int(request.args.get('id'))
    except ValueError as ve:
        err_coll.append(1)
    value = request.args.get('value')
    if not value:
        err_coll.append(3)

    if len(err_coll) > 1:
        return jsonify({'success': False, 'errs': err_coll})
    # DB ACCESS Gedöns
    result = db.access_db()

    return jsonify({'success': True, 'id': _id, 'value': value, 'result': result})

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
