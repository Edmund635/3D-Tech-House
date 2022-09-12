class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :address, :phone_number
  has_one :customer
end
