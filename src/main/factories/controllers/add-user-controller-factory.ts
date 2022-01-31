import { makeAddUserValidation, makeLogControllerDecorator, makeDbAddUser } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { AddUserController } from '@/presentation/controllers'

export const makeAddUserController = (): Controller => {
  const controller = new AddUserController(makeAddUserValidation(), makeDbAddUser())
  return makeLogControllerDecorator(controller)
}
