const Order = require('./order')
const OrderProduct = require('./orderProduct')
const Product = require('./product')
const Review = require('./review')
const User = require('./user')

Order.belongsTo(User)
User.hasMany(Order)

User.belongsToMany(Product, {through: Review})
Product.belongsToMany(User, {through: Review})

Product.belongsToMany(Order, {through: OrderProduct})
Order.belongsToMany(Product, {through: OrderProduct})


module.exports = {
  Order,
  OrderProduct,
  Product,
  Review,
  User
}
