class Category < ApplicationRecord
    has_many :products 

    # validates type:, inclusion: {in: %w(Elecontrics Games Furniture Miscellaneous), 
    # message: "Please select a valid category type"}
end
