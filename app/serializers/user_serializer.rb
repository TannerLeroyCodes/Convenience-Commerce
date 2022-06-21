class UserSerializer < ActiveModel::Serializer
  attributes  :first_name, :last_name, :email, :admin

  has_many :orders 
end
