import React from 'react'

import { Link } from 'react-router-dom'

export default () => (
  <div className='home'>
    <div className='container'>
      <div className='info'>
        <h1>Choose for Me</h1>
        <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      </div>

      <div className='home-button-group'>
        <Link to='/choose' className='button'>Choose</Link>
        <Link to='/create' className='button'>Create</Link>
      </div>
    </div>
  </div>
)
