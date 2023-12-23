class Contact {
  name: string
  phone: number
  email: string
  id: number
  isfavorite: boolean

  constructor(
    name: string,
    phone: number,
    email: string,
    id: number,
    isfavorite: boolean = false
  ) {
    this.name = name
    this.phone = phone
    this.email = email
    this.id = id
    this.isfavorite = isfavorite
  }
}

export default Contact
