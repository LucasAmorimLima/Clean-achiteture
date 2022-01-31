import { User } from '@/domain/entities'

export interface AddUser {
  add: (data: AddUser.Params) => Promise<void>
}
/**
 * The namespace is used for logical grouping of functionalities.
 * A namespace can include interfaces, classes, functions and variables
 * to support a single or a group of related functionalities.
 * */
export namespace AddUser {
  export type Params = Omit<User, 'id'>
}
