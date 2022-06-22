class Product < ApplicationRecord
  belongs_to :category
  has_many :order_items, dependent: :destroy
  has_many :orders, through: :order_items

  validates :price, numericality: {greater_than: 0}, presence: true
  validates :stock, numericality: {greater_than_or_equal_to: 0}, presence: true
  validates :name, presence: true
  validates :image_url, presence: true

end 
