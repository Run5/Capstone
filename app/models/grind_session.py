from sqlalchemy.ext.declarative import api
from .db import db


class GrindSessions(db.Model):

    __tablename__ = 'grind_sessions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)
    location = db.Column(db.String, nullable=False)
    char_class = db.Column(db.String, nullable=False)
    ap = db.Column(db.Integer, nullable=False, default=0)
    dp = db.Column(db.Integer, nullable=False, default=0)
    time = db.Column(db.Time, nullable=False)
    hourly_silver = db.Column(db.Integer, nullable=False, default=0)
    hourly_trash = db.Column(db.Integer, nullable=False, default=0)

    owner = db.relationship("User", back_populates="grind_sessions")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'location': self.location,
            'char_class': self.char_class,
            'ap': self.ap,
            'dp': self.dp,
            'time': self.time,
            'hourly_silver': self.hourly_silver,
            'hourly_trash': self.hourly_trash,
        }
