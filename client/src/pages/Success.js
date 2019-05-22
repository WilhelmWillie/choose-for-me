import React from 'react'

import queryString from 'query-string'

import { Link } from 'react-router-dom'

import Header from '../components/Header'

export default (props) => {
  const data = queryString.parse(props.location.search)

  return (
    <div className='success'>
      <Header page='CREATE' />

      <div className='container'>
        <h1>Poll Created Successfully</h1>

        <p>Your poll can now be voted on by other anonymous users!<br/><br/>To view results, bookmark the following unique generated results link.</p>

        <Link to={`/results?id=${data.id}&secretKey=${data.secretKey}`} className='button'>Results Link</Link>
      </div>
    </div>
  )
}
