import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { getPollQuery, voteInPollMutation } from '../queries'

class Poll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      choiceIndex: -1
    }
  }

  updateChoiceIndex(index) {
    this.setState({choiceIndex: index})
  }

  displayPoll() {
    const data = this.props.getPollQuery

    if (data.loading) {
      return (<span>Loading poll...</span>)
    } else {
      const poll = data.poll

      const choices = poll.choices.map((choice, index) => (
        <div
          className={(this.state.choiceIndex === index ? 'choice choice-active' : 'choice')}
          key={index}
          onClick={() => {
            this.updateChoiceIndex(index)
          }}
        >{choice.label}</div>
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

  submitForm = (e) => {
    e.preventDefault()

    if (this.state.choiceIndex === -1) return

    this.props.voteInPollMutation({
      variables: {
        id: this.props.getPollQuery.poll.id,
        choiceIndex: this.state.choiceIndex
      },
      refetchQueries: [{query: getPollQuery }]
    })

    this.setState({
      choiceIndex: -1
    })
  }

  render() {
    return (
      <div>
        {this.displayPoll()}

        <div className='text-center'>
          <a className='button' onClick={this.submitForm}>Submit</a>
        </div>
      </div>
    )
  }
}

export default compose (
  graphql(getPollQuery, { name: "getPollQuery" }),
  graphql(voteInPollMutation, { name: "voteInPollMutation"} )
)(Poll)
