"""empty message

Revision ID: 738769d323e0
Revises: 
Create Date: 2023-06-21 19:50:56.050764

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '738769d323e0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=180), nullable=False),
    sa.Column('salt', sa.String(length=100), nullable=False),
    sa.Column('avata', sa.String(length=100), nullable=False),
    sa.Column('create_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('todo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('label', sa.String(length=255), nullable=False),
    sa.Column('done', sa.Boolean(), nullable=False),
    sa.Column('create_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('todo')
    op.drop_table('user')
    # ### end Alembic commands ###