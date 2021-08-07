from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class CharacterEditForm(FlaskForm):
    char_class = StringField('class', validators=[DataRequired()])
    ap = IntegerField('AP', validators=[DataRequired()])
    dp = IntegerField('DP', validators=[DataRequired()])
