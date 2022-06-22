require 'faker'

puts "Seeding begins..."

puts "Seeding Users..."

User.create(first_name: "Tanner", last_name: "Leroy", email: "tanner@tleroy.com", admin: true, password: "password" )
User.create(first_name: "Bella", last_name: "Jo", email: "bella@tleroy.com", admin: true, password: "password" )
User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.unique.email, admin: false, password: "user" )



Category.create(type: "Electronics")
Category.create(type: "Furniture")
Category.create(type: "Games")

Product.create(category: "Furniture", description: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00), favorite: false, image_url: )

