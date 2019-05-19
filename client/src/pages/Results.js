import React from 'react'

import { Query } from "react-apollo";

import queryString from 'query-string'

import { getPollResultsQuery } from '../queries'

import { Link } from 'react-router-dom'

import Header from '../components/Header'

const Results = ({data, location}) => {
  const variables = queryString.parse(location.search)

  return (
    <div className='results'>
      <Header page='create' />
      <div className='container'>
        <Query
          query={getPollResultsQuery}
          variables={variables}
        >
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            const poll = data.poll

            const choices = poll.choices.map((choice, index) => (
              <div className='choice'>
                <span className='choice-label'>{choice.label}</span>
                <span className='choice-votes'>{choice.votes} votes</span>
              </div>
            ))
            return (
              <div className='results-container'>
                <h1 className='question'>Results: {poll.question}</h1>

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
