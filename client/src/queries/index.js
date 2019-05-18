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

export {
  getPollQuery
}
