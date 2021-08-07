from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Characters


def name_exists(form, field):
    # Checking if name exists
    name = field.data
    character = Characters.query.filter(Characters.name == name).first()
    if character:
        raise ValidationError('Name already exists.')

class CharacterForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), name_exists])
    char_class = StringField('class', validators=[DataRequired()])
    ap = IntegerField('AP', validators=[DataRequired()])
    dp = IntegerField('DP', validators=[DataRequired()])
