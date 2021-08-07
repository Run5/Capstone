from .db import db


class Characters(db.Model):

    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String, unique=True, nullable=False)
    char_class = db.Column(db.String, nullable=False)
    ap = db.Column(db.Integer, nullable=False, default=0)
    dp = db.Column(db.Integer, nullable=False, default=0)

    owner = db.relationship("User", back_populates="characters")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'char_class': self.char_class,
            'ap': self.ap,
            'dp': self.dp,
        }
