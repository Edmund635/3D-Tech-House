class Customer < ApplicationRecord
  has_many :tickets
  has_one :contacts
  has_many :orders
  has_many :items, through: :orders
  belongs_to :admin_user
  
  has_secure_password
  validates :username, presence: true, uniqueness: true
end
