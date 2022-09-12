class TicketSerializer < ActiveModel::Serializer
  attributes :id, :issue
  has_one :customer
end
