from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User
from flask_mail import Mail, Message

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

# Connects our app file to the database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///./db.sqlite"
app.config["SECRET_KEY"] = "18f3e4d01227bda3eabd490c"
app.config["MAIL_SERVER"] = "smtp.gmail.com."
app.config["MAIL_PORT"] = 587
app.config["MAIL_USERNAME"] = "ekibet544@gmail.com"
app.config["MAIL_PASSWORD"] = "99icloud"
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False


bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
mail = Mail(app)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()


# Getting current user (Home page)
@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    user = User.query.filter_by(id=user_id).first()
    return jsonify({"id": user.id, "email": user.email})


# Registering a new user
@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists!"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({"id": new_user.id, "email": new_user.email})


# Logging in an existing user
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    session["user_id"] = user.id

    return jsonify({"id": user.id, "email": user.email})


# @app.route("/send_message", methods=["POST"])
# def send_message():
#     user_id = session.get("user_id")

#     if not user_id:
#         return jsonify({"error": "Unauthorized"}), 401

#     message_text = request.json["message_text"]
#     user_email = request.json["user_email"]

#     # Create a new message and save it to the database
#     new_message = Message(sender_id=user_id, message=message_text)
#     db.session.add(new_message)
#     db.session.commit()

#     return jsonify({"message": "essage sent successfully", "user_email": user_email, "message_text": message_text})


# Contact form and send emails with Flask for support or feedback
@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    phone = request.form.get("phone")
    message = request.form.get("message")

    subject = f"Mail from {name}"
    body = f"Name: {name}\nE-mail: {email}\nPhone: {phone}\n\n\n{message}"
    sender = app.config["MAIL_USERNAME"]
    recipients = ["ekibet544@gmail.com"]

    # Create an email message
    msg = Message(subject=subject, body=body, sender=sender, recipients=recipients)

    try:
        mail.send(msg)
        return jsonify({"message": "Email sent successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Logging out a user
@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"


if __name__ == "__main__":
    app.run(debug=True)
