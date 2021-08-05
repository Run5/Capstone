from flask_wtf import FlaskForm
from wtforms import StringField, TimeField, IntegerField
from wtforms.validators import DataRequired


class GrindForm(FlaskForm):
    location = StringField('location', validators=[DataRequired()])
    char_class = StringField('class', validators=[DataRequired()])
    ap = IntegerField('AP', validators=[DataRequired()])
    dp = IntegerField('DP', validators=[DataRequired()])
    time = TimeField('time', validators=[DataRequired()])
    silver = IntegerField('silver', validators=[DataRequired()])
    trash = IntegerField('trash', validators=[DataRequired()])
