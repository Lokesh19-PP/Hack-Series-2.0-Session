from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "message":"Api is running"
    })

@app.route("/test")
def test():
    return jsonify({
        "message":"The test is working."
    })

if __name__ == "__main__":
    app.run(debug=True)