import { MongoHelper } from '@/infra/db'
import { AddUserRepository } from '@/data/protocols/db'

export class UserMongoRepository implements AddUserRepository {
  async add (data: AddUserRepository.Params): Promise<void> {
    const userCollection = MongoHelper.getCollection('users')
    await userCollection.insertOne(data)
  }
}
