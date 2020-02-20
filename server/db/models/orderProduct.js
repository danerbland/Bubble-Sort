const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('orderProduct', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = OrderProduct

//TODO add a hook to reduce product quantity when new order product is made.
