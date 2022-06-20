class OrderSerializer < ActiveModel::Serializer
  attributes :id, :ordered
  has_one :user
end
