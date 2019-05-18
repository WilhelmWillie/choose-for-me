import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getPollQuery } from '../queries'

class Poll extends Component {
  displayPoll() {
    const data = this.props.data

    if (data.loading) {
      return (<span>Loading poll...</span>)
    } else {
      const poll = this.props.data.poll

      const choices = poll.choices.map((choice, index) => (
        <div className='choice' key={index}>{choice.label}</div>
      ))

      return (
        <div>
          <p className='question'>{poll.question}</p>

          <div className='choices'>
            {choices}
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.displayPoll()}

        <div className='text-center'>
          <a className='button'>Submit</a>
        </div>
      </div>
    )
  }
}

export default graphql(getPollQuery)(Poll)
