import { AddUser } from '@/domain/usecases'
import { AddUserRepository } from '../protocols/db/user/add-user-repository'

export class DbAddUser implements AddUser {
  constructor (private readonly addUserRepository: AddUserRepository) {}

  async add (data: AddUser.Params): Promise<void> {
    await this.addUserRepository.add(data)
  }
}
