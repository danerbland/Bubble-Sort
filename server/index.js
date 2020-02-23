const db = require('./db')
const morgan = require('morgan')
const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()

const PORT = 8080

function createApp (){
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

}

function startListening () {
  const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

async function bootApp () {
  await db.sync()
  await createApp()
  await startListening()
}

bootApp();

module.exports = app
