import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { AddUser } from '@/domain/usecases'

export class AddUserController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addUser: AddUser
  ) {}

  async handle (request: AddUserController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      await this.addUser.add(request)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddUserController {
  export type Request = {
    id: string
    name: string
    email: string
    password: string
    address: Address
  }
  type Address = {
    street: string
    number: number
    cep: number
  }
}
