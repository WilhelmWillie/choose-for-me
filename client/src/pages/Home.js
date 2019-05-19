import React from 'react'

import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import About from '../components/About'

export default () => (
  <div className='home'>
    <Hero />

    <section className='paths'>
      <div className='container'>
        <div className='row'>
          <div className='full'>
            <h2>pick a path</h2>
          </div>
        </div>

        <div className='row'>
          <div className='half'>
            <div className='box'>
              <h3>choose for others</h3>
              <p>help anonymous users out and vote in their polls. every time you vote, you’ll be given a new a random polll and the cycle repeats.</p>
            </div>
          </div>

          <div className='half'>
            <div className='box'>
              <h3>be a creator</h3>
              <p>create your own polls and let anonymous internet people give you results. once you create a poll, you’ll be given a unique results link so you can come back and see what the people have chosen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <About />
  </div>
)
