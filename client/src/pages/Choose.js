import React from 'react'

import { Link } from 'react-router-dom'

import Poll from '../components/Poll'

export default () => (
  <div className='choose'>
    <div className='container'>
      <Poll />
    </div>

    <Link to='/'>
      <div className='button back-button'><span className="icon"><i className='fas fa-arrow-left'></i></span> Back</div>
    </Link>

    <Link to='/create'>
      <div className='button create-button'><span className='icon'><i className='fas fa-plus-square'></i></span> Create Your Own</div>
    </Link>
  </div>
)
