import React from 'react'

import { Link } from 'react-router-dom'

export default ({page}) => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='row'>
          <div className='half'>
            <img src='/logo_text.svg' alt='Choose for Me' className='hero-logo' />
          </div>

          <div className='half'>
            <div className='hero-content'>
              <h2>anonymous crowdsourced polls</h2>

              <p>poll anonymous people from around the world. let them help you resolve debates, make tough decisions, or learn more about people’s tastes.</p>
            </div>

            <div className='hero-cta-group'>
              <div className='hero-cta'>
                <Link to='/choose' className='button'>Choose</Link>

                <p className='hero-cta-description'>anonymously vote on random polls made by other users</p>
              </div>

              <div className='hero-cta'>
                <Link to='/create' className='button'>Create</Link>

                <p className='hero-cta-description'>create your own for others to vote on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
