const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const schema = require('./schema')

const app = express()

// Connect to database
mongoose.connect('mongodb://localhost/choose-for-me')

// Bind Express with GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV !== 'production'
}))

// Start our server
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`🚀 Server live on port ${port}`)
})
