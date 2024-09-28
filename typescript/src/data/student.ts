export type Student = {
  id: number
  firstName: string
  lastName: string
  address?: string[]
}

export const johnDoe: Student = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  address: ['Jakarta Selatan', 'Bogor'],
}
