import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddUserValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email','password','address']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
