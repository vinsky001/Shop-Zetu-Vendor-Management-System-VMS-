from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired, ValidationError

#User/vendor registration
class Join_as_Vendor(FlaskForm):
    #Validates username inputs by checking the database
    def  validate_username(self, username):
        existing_user_username = User.query.filter_by(
            username=username.data).first()
        #if there is a similar username:
        if existing_user_username:
            raise ValidationError(
                'That username already exists. Please choose a different one.')
            
    def validate_email_address(self, email_address):
        existing_email_address = User.query.filter_by(
            email_address=email_address.data).first()
        #if there is a similar Email Address:
        if existing_email_address:
            raise ValidationError('Email address already exists! Please try a different Email Address')
    
    def validate_brand_name(self, brand_name):
        existing_brand_name = User.query.filter_by(
            brand_name=brand_name.data) .first()
        #if there is a similar brand name:
        if existing_brand_name:
            raise ValidationError('Brand name already exists!Please try a different Brand name')        
                      
    
    username = StringField(label='Username', validators=[Length(min=5, max=15), DataRequired()])
    email_address = StringField(label='Email Address', validators=[Email(), DataRequired()])
    brand_name = StringField(label='Brand Name', validators=[Length(max=15), DataRequired()])
    password1 =  PasswordField(label='Password', validators=[Length(min=5)])  
    password2 =  PasswordField(label='Confirm Password', validators=[EqualTo('password1')])
    Submit = SubmitField(label="Create Account")
    
    
 #user/vendor sign-in   
class LoginForm(FlaskForm):
    username = StringField(label='Username', validators=[DataRequired()])
    password = PasswordField(label='Password', validators=[DataRequired()])
    submit = SubmitField(label='Sign in')     