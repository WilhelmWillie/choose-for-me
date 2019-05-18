import React from 'react'

import { Link } from 'react-router-dom'

import CreateForm from '../components/CreateForm'

export default ({history}) => (
  <div className='create'>
    <div className='container'>
      <CreateForm history={history}/>
    </div>

    <Link to='/'>
      <div className='button back-button'><span className="icon"><i className='fas fa-arrow-left'></i></span> Back</div>
    </Link>
  </div>
)
