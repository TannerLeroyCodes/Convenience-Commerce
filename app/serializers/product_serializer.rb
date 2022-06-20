class ProductSerializer < ActiveModel::Serializer
  attributes :id, :description, :stock, :price, :favorite
  has_one :category
end
