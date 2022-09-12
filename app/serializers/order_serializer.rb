class OrderSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item
  has_one :customer
end
