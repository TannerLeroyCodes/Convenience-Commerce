require 'faker'
# require "pry"

puts "Seeding begins..."

puts "Seeding Users..."

tanner = User.create(first_name: "Tanner", last_name: "Leroy", email: "tanner@tleroy.com", admin: true, password: "password" )
bella = User.create(first_name: "Bella", last_name: "Jo", email: "bella@tleroy.com", admin: true, password: "password" )
# binding.pry


user1 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: "test@gmail.com", admin: false, password: "user" )
user2 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.unique.email, admin: false, password: "user" )
user3 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.unique.email, admin: false, password: "user" )

puts "Seeding Categories..."

Category.create(name: "Electronics")
Category.create(name: "Furniture")
Category.create(name: "Movies & Television")
Category.create(name: "Video Games")

puts "Seeding Products..."

furniture = Product.create(category_id: Category.find_by(name: "Furniture").id, name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F28638272-6943-11ea-b96a-000a4e1a8b0c.jpg?crop=3959%2C2639%2C0%2C0")

Product.create(category_id: Category.find_by(name: "Furniture").id, name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F28638272-6943-11ea-b96a-000a4e1a8b0c.jpg?crop=3959%2C2639%2C0%2C0")
Product.create(category_id: Category.find_by(name: "Furniture").id, name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F28638272-6943-11ea-b96a-000a4e1a8b0c.jpg?crop=3959%2C2639%2C0%2C0")
Product.create(category_id: Category.find_by(name: "Furniture").id, name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F28638272-6943-11ea-b96a-000a4e1a8b0c.jpg?crop=3959%2C2639%2C0%2C0")
Product.create(category_id: Category.find_by(name: "Furniture").id, name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F28638272-6943-11ea-b96a-000a4e1a8b0c.jpg?crop=3959%2C2639%2C0%2C0")

Product.create!(category_id: Category.find_by(name: "Electronics").id, name: Faker::Device.model_name, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg?q=60")
Product.create(category_id: Category.find_by(name: "Electronics").id, name: Faker::Device.model_name, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg?q=60")
Product.create(category_id: Category.find_by(name: "Electronics").id, name: Faker::Device.model_name, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg?q=60")
Product.create(category_id: Category.find_by(name: "Electronics").id, name: Faker::Device.model_name, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg?q=60")
Product.create(category_id: Category.find_by(name: "Electronics").id, name: Faker::Device.model_name, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg?q=60")


game = Product.create(category_id: Category.find_by(name: "Video Games").id, description: "A(n) #{Faker::Game.genre.downcase} game, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: "https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb2d8ZW58MHx8MHx8&w=1000&q=80")

Product.create(category_id: Category.find_by(name: "Video Games").id, description: "A(n) #{Faker::Game.genre.downcase} game, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: "https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb2d8ZW58MHx8MHx8&w=1000&q=80")
Product.create(category_id: Category.find_by(name: "Video Games").id, description: "A(n) #{Faker::Game.genre.downcase} game, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: "https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb2d8ZW58MHx8MHx8&w=1000&q=80")
Product.create(category_id: Category.find_by(name: "Video Games").id, description: "A(n) #{Faker::Game.genre.downcase} game, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: "https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb2d8ZW58MHx8MHx8&w=1000&q=80")
Product.create(category_id: Category.find_by(name: "Video Games").id, description: "A(n) #{Faker::Game.genre.downcase} game, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: "https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb2d8ZW58MHx8MHx8&w=1000&q=80")


Product.create(category_id: Category.find_by(name: "Movies & Television").id, name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg")
Product.create(category_id: Category.find_by(name: "Movies & Television").id, name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg")
Product.create(category_id: Category.find_by(name: "Movies & Television").id, name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg")
Product.create(category_id: Category.find_by(name: "Movies & Television").id, name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg")
Product.create(category_id: Category.find_by(name: "Movies & Television").id, name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg")


puts "Seeding Orders..."

order1 = Order.create(ordered: false, user_id: user1.id)
order2 = Order.create(ordered: false, user_id: user1.id)
order3 = Order.create(ordered: false, user_id: user3.id)
order4 = Order.create(ordered: false, user_id: user2.id)


puts "Seeding Order Items..."

OrderItem.create(quantity: rand(0..10), order_id: order1.id, product_id: furniture.id)
OrderItem.create(quantity: rand(0..10), order_id: order3.id, product_id: game.id) 

puts "Seeding done!"

