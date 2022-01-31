import { AddUser } from '@/domain/usecases'
import { UserMongoRepository } from '@/infra/db'
import { DbAddUser } from '@/data/usecases'

export const makeDbAddUser = (): AddUser => {
  const userMongoRepository = new UserMongoRepository()
  return new DbAddUser(userMongoRepository)
}
