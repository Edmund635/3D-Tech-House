class Customer < ApplicationRecord
  has_many :tickets
  has_one :contact
  has_many :orders, dependent: :destroy
  has_many :items, through: :orders
  belongs_to :admin_user
  
  has_secure_password
  validates :username, presence: true, uniqueness: true
end
