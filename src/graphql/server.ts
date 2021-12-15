import { ApolloServer } from 'apollo-server'
import * as envars from '@src/env'
import resolvers from './resolver'
import typeDefs from './schema'

export const startApolloSever = async (): Promise<void> => {
  const server = new ApolloServer({ resolvers, typeDefs: typeDefs(), cors: true })
  const { url } = await server.listen(envars.SERVER_PORT)
  console.log(`🚀  Server ready at ${url}`)
}

export const closeApolloServer = (): Promise<boolean> => {
  // TODO --
  //  - Close all database connections
  //  - Kill current host:port of graphql
  //  - Wait for atleast 500ms
  return Promise.resolve(true)
}
