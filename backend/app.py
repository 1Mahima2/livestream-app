from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory overlay storage for demo
overlays = []

@app.route('/overlays', methods=['GET'])
def get_overlays():
    return jsonify(overlays)

@app.route('/overlays', methods=['POST'])
def add_overlay():
    data = request.json
    overlays.append(data)
    return jsonify({'message': 'Overlay added', 'overlay': data})

@app.route('/overlays/<int:index>', methods=['DELETE'])
def delete_overlay(index):
    if 0 <= index < len(overlays):
        removed = overlays.pop(index)
        return jsonify({'message': 'Overlay deleted', 'overlay': removed})
    return jsonify({'error': 'Invalid index'}), 400

if __name__ == '__main__':
    app.run(debug=True)
