import React from 'react'

import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Poll from '../components/Poll'

export default () => (
  <div className='choose'>
    <Header page='CHOOSE'/>

    <div className='container'>
      <Poll />
    </div>
  </div>
)
