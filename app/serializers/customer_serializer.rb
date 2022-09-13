class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_one :admin_user
  has_many :tickets
  has_one :contact
  has_many :items 
end
