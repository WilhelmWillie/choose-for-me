import React from 'react'

import { Query } from "react-apollo";

import queryString from 'query-string'

import { getPollResultsQuery } from '../queries'

import { Link } from 'react-router-dom'

const Results = ({data, location}) => {
  const variables = queryString.parse(location.search)

  return (
    <div className='choose'>
      <div className='container'>
        <h1>Results for Poll</h1>

        <Query
          query={getPollResultsQuery}
          variables={variables}
        >
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            const poll = data.poll

            const choices = poll.choices.map((choice, index) => (
              <p>{choice.label} ({choice.votes} votes)</p>
            ))
            return (
              <div>
                <h1>Question: {poll.question}</h1>

                {choices}
              </div>
            );
          }}
        </Query>
      </div>
    </div>
  )
}

export default Results
