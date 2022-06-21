class User < ApplicationRecord
    has_secure_password
    has_many :orders, dependent: :destroy
    has_many :order_items, through: :orders

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true 

end
