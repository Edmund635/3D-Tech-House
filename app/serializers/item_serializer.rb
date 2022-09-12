class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image
  has_many :reviews
  has_many :customers
end
