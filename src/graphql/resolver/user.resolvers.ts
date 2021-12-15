import { User } from '@src/db/entity'
import { UserRepository } from '@src/db/repository'
import { logger as _logger } from '@src/helper'

const { getLoggerInstance, formatLog } = _logger
const logger = getLoggerInstance()

export default {
  Query: {
    users: async (): Promise<User[]> => {
      const users = await UserRepository.getUserList()
      logger.info(formatLog('users', users))
      return users
    },
  },
}
