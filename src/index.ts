require('dotenv').config()

import { startApolloSever, closeApolloServer } from './graphql/server'
import { verifyEnvironment } from './helper/env'
import { connect } from './db'

const logGoodbye = (): void => {
  console.log('Cya! Thanks for stopping by.')
}

const bootstrap = (): Promise<void> => {
  verifyEnvironment()
  return connect.default.then(startApolloSever)
}

const cleanExit = (): Promise<any> => {
  return closeApolloServer()
    .finally(() => {
      logGoodbye()
      process.exit()
    })
}

const handleError = (err: Error): void => {
  console.error(err)
  throw err
}

process.on('SIGINT', cleanExit)
process.on('SIGTERM', cleanExit)

bootstrap().catch(handleError)
