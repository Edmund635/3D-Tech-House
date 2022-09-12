# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


###############################################################################################################

#Seed Data For Admin Users

###############################################################################################################

#Admin Users
admin_user1 = AdminUser.create(username: 'macanamfg', password: 'techouse8977')

###############################################################################################################


#Founders


#About

About.create(mission: 'Deliver 3D products', email: 'macanamfg@gmail.com', etsy: 'https://www.etsy.com/people/xumkckepz1njpi0s', admin_user: admin_user1)


###############################################################################################################

#Seed Data For Customers

###############################################################################################################

#Customers
customer1 = Customer.create(username: 'test231', password: '1234', admin_user: admin_user1)

#Tickets


#Contacts
contact1 = Contact.create(customer: customer1, last_name: 'Johnson', first_name: 'Gerrard', email: 'adjei@example.com', address: '777 Main Street Atlanta Georgia 29192', phone_number: '2120009821')

#Items
item1 = Item.create(name: 'Bull print', price: 20, image: 'https://cdna.artstation.com/p/marketplace/presentation_assets/000/250/704/large/file.jpg?1576054408')
item2 = Item.create(name: 'Bull print', price: 20, image: 'https://cdna.artstation.com/p/marketplace/presentation_assets/000/250/704/large/file.jpg?1576054408')
item3 = Item.create(name: 'Bull print', price: 20, image: 'https://cdna.artstation.com/p/marketplace/presentation_assets/000/250/704/large/file.jpg?1576054408')
item4 = Item.create(name: 'Bull print', price: 20, image: 'https://cdna.artstation.com/p/marketplace/presentation_assets/000/250/704/large/file.jpg?1576054408')
item5 = Item.create(name: 'Bull print', price: 20, image: 'https://cdna.artstation.com/p/marketplace/presentation_assets/000/250/704/large/file.jpg?1576054408')


#Orders
order1 = Order.create(customer: customer1, item: item1)

#Fake Reviews for Items
