import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Choose from './pages/Choose'
import Create from './pages/Create'

export default () => (
  <Router>
    <Route path='/' exact component={Home} />
    <Route path='/choose' component={Choose} />
    <Route path='/create' component={Create} />
  </Router>
)
