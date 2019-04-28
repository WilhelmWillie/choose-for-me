import React from 'react'

import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1>Home</h1>

    <Link to='/choose'>Choose</Link>
    <Link to='/create'>Create</Link>
  </div>
)
