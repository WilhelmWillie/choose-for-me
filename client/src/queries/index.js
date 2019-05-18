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

export {
  getPollQuery,
  voteInPollMutation
}
