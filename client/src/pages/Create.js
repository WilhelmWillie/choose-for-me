import React from 'react'

import { Link } from 'react-router-dom'

import Header from '../components/Header'
import CreateForm from '../components/CreateForm'

export default ({history}) => (
  <div className='create'>
    <Header page='CREATE'/>

    <div className='container'>
      <CreateForm history={history}/>
    </div>
  </div>
)
