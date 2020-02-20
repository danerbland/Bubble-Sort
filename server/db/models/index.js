const Order = require('./order')
const Product = require('./product')
const Review = require('./review')
const User = require('./user')

Order.belongsTo(User)
User.hasMany(Order)


