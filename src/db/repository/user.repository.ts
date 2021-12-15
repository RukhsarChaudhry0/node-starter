import { getConnection, Repository } from 'typeorm'
import { entity } from '@src/db'
import { TYPEORM_CONNECTION } from '@src/env'

let cachedUserRepository: Repository<entity.User>
export const getUserRepository = (): Repository<entity.User> => {
  if (cachedUserRepository) {
    return cachedUserRepository
  }

  const repo = getConnection(TYPEORM_CONNECTION).getRepository(entity.User)
  cachedUserRepository = repo
  return repo
}

export const getUserList = (): Promise<entity.User[]> => {
  return getUserRepository().find({})
}
