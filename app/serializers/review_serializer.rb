class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review
  has_one :item
end
