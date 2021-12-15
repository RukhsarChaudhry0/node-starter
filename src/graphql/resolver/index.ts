import { mergeResolvers } from '@graphql-tools/merge'
import { GraphQLDateTime, GraphQLDate } from 'graphql-iso-date'
import userResolvers from './user.resolvers'
import bookResolvers from './book.resolvers'

const dateTimeResolvers = {
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
}

const resolvers = mergeResolvers([
  dateTimeResolvers,
  userResolvers,
  bookResolvers,
])
export default resolvers
