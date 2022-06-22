class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :stock, :price, :favorite, :image_url
  has_one :category
end
