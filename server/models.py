from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired, ValidationError

db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    firstname = db.Column(db.String(25), primary_key=True, unique=False)
    lastname = db.Column(db.String(25), primary_key=True, unique=False)
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
    
    
class register_user(FlaskForm):
    #Validates emailaddress inputs by checking the database
    def validate_email_address(self, emailaddress):
        existing_email_address = User.query.filter_by(
            email_address=email_address.data).first()
        #if there is a similar Email Address:
        if existing_email_address:
            raise ValidationError('Email address already exists! Please try a different Email Address')
        
    
    email_address = StringField(label='Email Address', validators=[Email(), DataRequired()])
    password1 =  PasswordField(label='Password', validators=[Length(min=5)])  
    password2 =  PasswordField(label='Confirm Password', validators=[EqualTo('password1')])
    Submit = SubmitField(label="")       
    
        
    
class login_user(FlaskForm):
    username = StringField(label='Username', validators=[DataRequired()])
    password = PasswordField(label='Password', validators=[DataRequired()])
    submit = SubmitField(label="")     
    