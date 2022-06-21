class ProductSerializer < ActiveModel::Serializer
  attributes :id, :description, :stock, :price, :favorite, :image_url
  has_one :category
end
