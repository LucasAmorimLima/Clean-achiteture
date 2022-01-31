export type User = {
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
