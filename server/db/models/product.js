const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {

  //Product Name
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  //Description
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: "No Description Available"
  },

  //Price will be in pennies.
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  //Current Quantity
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

