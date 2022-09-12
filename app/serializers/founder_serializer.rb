class FounderSerializer < ActiveModel::Serializer
  attributes :id, :founder1, :founder2, :founder3, :founder4, :image1, :image2, :image3, :image4, :desc1, :desc2, :desc3, :desc4
  has_one :admin_user
end
