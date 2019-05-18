import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { addPollMutation } from '../queries'

class CreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      choices: [
        '',
        '',
        ''
      ]
    }
  }

  updateQuestion = (value) => {
      this.setState({ question: value })
  }

  addChoice = () => {
    const choices = this.state.choices
    choices.push('')

    this.setState({ choices })
  }

  updateChoice = (value, index) => {
    const choices = this.state.choices
    choices[index] = value

    this.setState({ choices })
  }

  removeChoice = (index) => {
    const choices = this.state.choices
    choices.splice(index, 1)

    this.setState({ choices })
  }

  submitForm = (e) => {
    e.preventDefault()

    const question = this.state.question

    const choices = this.state.choices.map((choice) => (
      {
        label: choice
      }
    ))

    this.props.mutate({
      variables: { question, choices }
    }).then(({ data }) => {
      const { id, secretKey } = data.addPoll

      // Redirect to success page
      this.props.history.push(`/success?id=${id}&secretKey=${secretKey}`)
    })
  }

  render() {
    const choices = this.state.choices.map((choice, index) => {
        return (
          <div className="input-group">
            <input
              type='text'
              placeholder='Enter choice here...'
              value={this.state.choices[index]}
              onChange={(e) => {this.updateChoice(e.target.value, index) }}
            />

            <span
              className="remove-choice"
              onClick={() => { this.removeChoice(index) }}
            >
              <i className="fas fa-times"></i>
          </span>
          </div>
        )
    })

    return (
      <form className='create-form' onSubmit={this.submitForm}>
        <h2>Question</h2>

        <div className="input-group">
          <input
            type='text'
            placeholder='Enter question here...'
            onChange={(e) => { this.updateQuestion(e.target.value) }}
          />
        </div>

        <h2>Choices</h2>

        {choices}

        <input type='button' value='Add Choice' className='button' onClick={this.addChoice} />

        <br/><br/>

        <input type='submit' value='Create Poll' className='button' />
      </form>
    )
  }
}

export default graphql(addPollMutation)(CreateForm)
