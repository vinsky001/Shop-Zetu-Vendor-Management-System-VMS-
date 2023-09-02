from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired

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
    
    username = StringField(label='Username', validators=[Length(min=5, max=15), DataRequired()])
    email_address = StringField(label='Email Address', validators=[Email(), DataRequired()])
    brand_name = StringField(label='Brand Name', validators=[Length(max=15), DataRequired()])
    password1 =  PasswordField(label='Password', validators=[Length(min=5)])  
    password2 =  PasswordField(label='Confirm Password', validators=[EqualTo('password1')])
    Submit = SubmitField(label="Create Account")
    
     