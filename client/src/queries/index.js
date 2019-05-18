import { gql } from 'apollo-boost'

const getPollQuery = gql`
{
  poll {
    question
    id
    choices {
      label
    }
  }
}
`

const getPollResultsQuery = gql`
query GetPollResults($id: ID!, $secretKey: ID!) {
  poll(id: $id, secretKey: $secretKey) {
    id
    question
    choices {
      label
      votes
    }
  }
}
`

const voteInPollMutation = gql`
mutation VoteInPoll($id: ID!, $choiceIndex: Int!){
  voteInPoll(id: $id, choiceIndex: $choiceIndex ) {
    id
    choices {
      label
    }
  }
}
`

const addPollMutation = gql`
mutation AddPoll($question: String!, $choices: [ChoiceInput]) {
  addPoll(question: $question, choices: $choices) {
    id
    secretKey
  }
}
`

export {
  getPollQuery,
  getPollResultsQuery,
  voteInPollMutation,
  addPollMutation
}
