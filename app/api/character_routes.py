from app.forms.character_form import CharacterForm
from app.forms.character_edit_form import CharacterEditForm
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Characters, db


character_routes = Blueprint('characters', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@character_routes.route('', methods=['GET', 'POST'])
@login_required
def characters_func():
    if request.method == 'GET':
        characters = Characters.query.filter(
            Characters.user_id == current_user.id).all()
        if characters:
            return {'all_characters':[character.to_dict() for character in characters]}
        else:
            return {}
    if request.method == 'POST':
        form = CharacterForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            character = Characters(
                user_id = current_user.id,
                name = form.data['name'],
                char_class = form.data['char_class'],
                ap = form.data['ap'],
                dp = form.data['dp'],
            )
            db.session.add(character)
            db.session.commit()
            return character.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@character_routes.route('/<id>', methods=['DELETE', 'PATCH'])
@login_required
def character_edit(id):
    if request.method == 'DELETE':
        deleted_character = Characters.query.filter(
            Characters.user_id == current_user.id,
            Characters.id == id).one_or_none()
        db.session.delete(deleted_character)
        db.session.commit()
        return deleted_character.to_dict()
    if request.method == 'PATCH':
        form = CharacterEditForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            character_exists = Characters.query.filter(
                Characters.user_id == current_user.id,
                Characters.id == id).one_or_none()

            character_exists.char_class = form.data['char_class']
            character_exists.ap = form.data['ap']
            character_exists.dp = form.data['dp']

            db.session.add(character_exists)
            db.session.commit()
            return character_exists.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
