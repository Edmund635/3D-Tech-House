class AboutSerializer < ActiveModel::Serializer
  attributes :id, :mission, :email, :etsy
  has_one :admin_user
end
