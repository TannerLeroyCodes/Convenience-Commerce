puts "Seeding begins..."

puts "Seeding Users..."

User.create(first_name: "Tanner", last_name: "Leroy", email: "tanner@tleroy.com", admin: true, password: "password" )
User.create(first_name: "Bella", last_name: "Jo", email: "bella@tleroy.com", admin: true, password: "password" )


puts "Seeding Categories.."

Category.create(type: "Elecontrics")


puts "Seeding Products..."


