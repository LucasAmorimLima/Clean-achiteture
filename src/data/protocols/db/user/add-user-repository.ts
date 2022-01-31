import { AddUser } from '@/domain/usecases'

export interface AddUserRepository {
  add: (data: AddUserRepository.Params) => Promise<void>
}
/**
 * The namespace is used for logical grouping of functionalities.
 * A namespace can include interfaces, classes, functions and variables
 * to support a single or a group of related functionalities.
 * */
export namespace AddUserRepository {
  export type Params = AddUser.Params
}
