from app.forms.grind_form import GrindForm
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import GrindSessions, db
from json import dumps

grind_sessions_routes = Blueprint('grind_sessions', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@grind_sessions_routes.route('', methods=['GET', 'POST'])
def grind_sessions_func():
    if request.method == 'GET':
        grind_sessions = GrindSessions.query.all()
        if grind_sessions:
            return {'all_grind_sessions':[session.to_dict() for session in grind_sessions]}
        else:
            return {}
    if request.method == 'POST':
        form = GrindForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            session = GrindSessions(
                user_id = current_user.id,
                location = form.data['location'],
                char_class = form.data['char_class'],
                ap = form.data['ap'],
                dp = form.data['dp'],
                time = form.data['time'],
                silver = form.data['silver'],
                trash = form.data['trash'],
            )
            db.session.add(session)
            db.session.commit()
            return session.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@grind_sessions_routes.route('/<id>', methods=['DELETE', 'PATCH'])
@login_required
def grind_sessions_edit(id):
    if request.method == 'DELETE':
        deleted_grind = GrindSessions.query.filter(
            GrindSessions.user_id == current_user.id,
            GrindSessions.id == id).one_or_none()
        db.session.delete(deleted_grind)
        db.session.commit()
        return deleted_grind.to_dict()
    if request.method == 'PATCH':
        form = GrindForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            session_exists = GrindSessions.query.filter(
                GrindSessions.user_id == current_user.id,
                GrindSessions.id == id).one_or_none()

            session_exists.location = form.data['location'],
            session_exists.char_class = form.data['char_class'],
            session_exists.ap = form.data['ap'],
            session_exists.dp = form.data['dp'],
            session_exists.time = form.data['time'],
            session_exists.silver = form.data['silver'],
            session_exists.trash = form.data['trash'],

            db.session.add(session_exists)
            db.session.commit()
            return session_exists.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
