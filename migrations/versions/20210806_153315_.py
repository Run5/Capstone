"""empty message

Revision ID: 4b43d0d4d5dc
Revises: 28b556747ded
Create Date: 2021-08-06 15:33:15.454619

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4b43d0d4d5dc'
down_revision = '28b556747ded'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint(None, 'characters', ['name'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'characters', type_='unique')
    # ### end Alembic commands ###
