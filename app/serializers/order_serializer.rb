class OrderSerializer < ActiveModel::Serializer
  attributes :id, :ordered
  has_one :user

  has_many :order_items
end
