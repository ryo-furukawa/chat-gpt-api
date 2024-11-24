from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# CORS設定
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.route('/api/chat', methods=['POST'])
def chat():
    """
    POSTリクエストに対して、受信したメッセージに基づく応答を返す。
    """
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    # 仮の応答を生成
    response = f"AI: You said '{user_message}'"
    return jsonify({"reply": response})


if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
