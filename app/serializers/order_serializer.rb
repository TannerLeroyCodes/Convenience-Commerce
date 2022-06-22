class OrderSerializer < ActiveModel::Serializer
  attributes :id, :ordered, :order_items
  has_one :user

  has_many :order_items
end
