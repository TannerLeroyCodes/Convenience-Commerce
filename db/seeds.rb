require 'faker'

puts "Seeding begins..."

puts "Seeding Users..."

User.create(first_name: "Tanner", last_name: "Leroy", email: "tanner@tleroy.com", admin: true, password: "password" )
User.create(first_name: "Bella", last_name: "Jo", email: "bella@tleroy.com", admin: true, password: "password" )

3.times do 
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.unique.email, admin: false, password: "user" )
end

puts "Seeding Categories..."

Category.create(type: "Electronics")
Category.create(type: "Furniture")
Category.create(type: "Movies & Television")
Category.create(type: "Video Games")

puts "Seeding Products..."

5.times do 
    Product.create(category: "Furniture", name: Faker::House.furniture, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F28638272-6943-11ea-b96a-000a4e1a8b0c.jpg?crop=3959%2C2639%2C0%2C0")
end

5.times do
    Product.create(category: "Electronics", name: Faker::Device.model_name, stock: rand(0..100), price: rand(0.00..1000.00).round(2), favorite: false, image_url: "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg?q=60")
end

5.times do
    Product.create(category: "Video Games", description: "A(n) #{Faker::Game.genre}, best played on the #{Faker::Game.platform }.", name: Faker::Game.title, stock: rand(0..100), price: rand(0.00..100.00).round(2), favorite: false, image_url: "https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb2d8ZW58MHx8MHx8&w=1000&q=80")
end

5.times do 
    Product.create(category: "Movies & Television", name: Faker::Movie.title, stock: rand(0..100), price: rand(0.00..50.00).round(2), favorite: false, image_url: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg")
end


puts "Seeding Orders..."

Order.create(ordered: false, user_id: 3)
Order.create(ordered: false, user_id: 4)
Order.create(ordered: false, user_id: 3)
Order.create(ordered: false, user_id: 4)


puts "Seeding Order Items..."

OrderItem.create(quantity: rand(0..10), order_id: 1, product_id: 1)
OrderItem.create(quantity: rand(0..10), order_id: 2, product_id: 3) 



