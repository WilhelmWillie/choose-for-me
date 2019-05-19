import React from 'react'

import { Link } from 'react-router-dom'

export default ({page}) => {
  const button = (page !== 'CHOOSE') ? (
    <Link to='/choose' className='button'>Choose</Link>
  ) : (
    <Link to='/create' className='button'>Create</Link>
  )

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'><img src='/logo_check.svg' alt='Logo with check' className='header-logo' /></Link>

        {button}
      </div>
    </div>
  )
}
