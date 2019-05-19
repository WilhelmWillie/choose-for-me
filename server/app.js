const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const path = require('path')

const schema = require('./schema')

const app = express()

// Connect to database
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/choose-for-me')

// Bind Express with GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV !== 'production'
}))

// Serve client if production
console.log(process.env.NODE_ENV)
console.log(process.env)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

// Start our server
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`🚀 Server live on port ${port}`)
})
