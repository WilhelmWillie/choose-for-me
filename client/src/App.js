import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Home from './pages/Home'
import Choose from './pages/Choose'
import Create from './pages/Create'
import Success from './pages/Success'
import Results from './pages/Results'

import './styles/stylesheet.scss'

// Apollo client
const client = new ApolloClient()

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/choose' component={Choose} />
      <Route path='/create' component={Create} />
      <Route path='/success' component={Success} />
      <Route path='/results' component={Results} />
    </Router>
  </ApolloProvider>
)
