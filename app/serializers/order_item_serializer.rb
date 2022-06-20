class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :product
  has_one :order
end
