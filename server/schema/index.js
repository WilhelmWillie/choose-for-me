const graphql = require('graphql')
const Poll = require('../models/poll')

const {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql

// Choice
const ChoiceType = new GraphQLObjectType({
  name: 'Choice',
  fields: {
    label: { type: GraphQLString },
    votes: { type: GraphQLInt }
  }
})

const ChoiceInputType = new GraphQLInputObjectType({
  name: 'ChoiceInput',
  fields: {
    label: { type: GraphQLString }
  }
})

// Poll
const PollType = new GraphQLObjectType({
  name: 'Poll',
  fields: {
    id: { type: GraphQLID },
    question: { type: GraphQLString },
    secretKey: { type: GraphQLString },
    choices: { type: new GraphQLList(ChoiceType) }
  }
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    polls: {
      type: new GraphQLList(PollType),
      resolve(parent) {
        return Poll.find({})
      }
    },
    poll: {
      type: PollType,
      args: {
        id: {
          type: GraphQLID
        },
        secretKey: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        if (!args.id && !args.secretKey) {
          // Return a random record
          return Poll.countDocuments().exec().then((count) => {
            let random = Math.floor(Math.random() * count)
            return Poll.findOne().skip(random).select('-choices.votes -secretKey').exec()
          })
        } else {
          return Poll.findOne({
            _id: args.id,
            secretKey: args.secretKey
          })
        }
      }
    }
  }
})

// Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPoll: {
      type: PollType,
      args: {
        question: { type: GraphQLString },
        choices: { type: new GraphQLList(ChoiceInputType) }
      },
      resolve(parent, args) {
        const poll = new Poll({
          question: args.question,
          choices: args.choices
        })

        return poll.save()
      }
    },
    voteInPoll: {
      type: PollType,
      args: {
        id: { type: GraphQLID },
        choiceIndex: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return Poll.findById(args.id).exec().then((poll) => {
          poll.choices[args.choiceIndex].votes++
          poll.save()

          return poll
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
