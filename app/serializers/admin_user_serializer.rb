class AdminUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :customers
  has_many :tickets
  has_many :contacts
  has_many :orders
  has_one :about
  has_one :founder
end
