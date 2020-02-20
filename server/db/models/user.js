const Sequelize = require('sequelize')
const db = require('../db')
const crypto = require('crypto')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    }
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'No Bio Provided'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },

  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },

  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },

  googleId: {
    type: Sequelize.STRING
  },

  facebookId: {
    type: Sequelize.STRING
  },

  githubId: {
    type: Sequelize.STRING
  }
})


module.exports = User
