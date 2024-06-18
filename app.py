from flask import Flask, jsonify 
from flask_cors import CORS 
app = Flask(<strong>name</strong>) 
CORS(app)  # CORS を有効化 
@app.route('/location') 
def get_location(): 
    """ユーザーの緯度、経度、速度を取得し、JSON形式で返す""" 
    try: 
        # 緯度、経度、速度を取得 
        latitude = 35.6895  # ここでは例として緯度を設定 
        longitude = 139.6917  # ここでは例として経度を設定 
        speed = "不明"  # ここでは例として速度を設定（実際の取得は省略） 
<pre><code>    # JSON形式でデータを返す 
    location_data = { 
        "latitude": latitude, 
        "longitude": longitude, 
        "speed": speed 
    } 
    return jsonify(location_data) 
except Exception as e: 
    return jsonify({"error": str(e)}), 500 
