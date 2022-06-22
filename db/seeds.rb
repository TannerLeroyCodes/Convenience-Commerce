require 'faker'

puts "Seeding begins..."

puts "Seeding Users..."

User.create(first_name: "Tanner", last_name: "Leroy", email: "tanner@tleroy.com", admin: true, password: "password" )
User.create(first_name: "Bella", last_name: "Jo", email: "bella@tleroy.com", admin: true, password: "password" )
User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.unique.email, admin: false, password: "user" )
User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.unique.email, admin: false, password: "user" )
User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.unique.email, admin: false, password: "user" )

puts "Seeding Categories..."

Category.create(type: "Electronics")
Category.create(type: "Furniture")
Category.create(type: "Movies & Television")
Category.create(type: "Video Games")


puts "Seeding Products..."

Product.create(category: "Furniture", name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: )
Product.create(category: "Furniture", name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: )
Product.create(category: "Furniture", name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: )

Product.create(category: "Electronics", name: Faker::Camera.brand_with_model, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: )
Product.create(category: "Electronics", name: Faker::Camera.brand_with_model, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: )
Product.create(category: "Electronics", name: Faker::Device.model_name, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: )
Product.create(category: "Electronics", name: Faker::Device.model_name, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: )

Product.create(category: "Video Games", description: "A(n) #{Faker::Game.genre}, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: )
Product.create(category: "Video Games", description: "A(n) #{Faker::Game.genre}, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: )
Product.create(category: "Video Games", description: "A(n) #{Faker::Game.genre}, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: )
Product.create(category: "Video Games", description: "A(n) #{Faker::Game.genre}, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: )

Product.create(category: "Movies & Television", name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: )
Product.create(category: "Movies & Television", name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: )
Product.create(category: "Movies & Television", name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: )
Product.create(category: "Movies & Television", name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: )


puts "Seeding Orders..."

Order.create(ordered: false, user_id: 3)
Order.create(ordered: false, user_id: 4)


puts "Seeding Order Items..."

OrderItem.create(quantity: rand(0..10), order_id: 1, product_id: 1) 
