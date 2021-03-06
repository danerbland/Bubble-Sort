const db = require('./db')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()

function createApp (){
  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
}

//tell our server to send index.html
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})


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
