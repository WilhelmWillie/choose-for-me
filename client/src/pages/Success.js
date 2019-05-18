import React from 'react'

import queryString from 'query-string'

import { Link } from 'react-router-dom'

export default (props) => {
  const data = queryString.parse(props.location.search)

  return (
    <div className='success'>
      <div className='container'>
        <h1>Poll Created Successfully</h1>

        <p>Bookmark this link to view results to your poll</p>
        
        <Link to={`/results?id=${data.id}&secretKey=${data.secretKey}`} className='button'>Results Link</Link>
      </div>
    </div>
  )
}
