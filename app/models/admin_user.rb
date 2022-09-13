class AdminUser < ApplicationRecord
    has_many :customers
    has_many :tickets, through: :customers
    has_many :contacts, through: :customers
    has_many :orders, through: :customers
    has_one :about
    has_one :founder

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
