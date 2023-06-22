export interface UserDTO {
  id: string
  createdAt: Date
  updatedAt: Date
  username: string
  password: string
}

export interface User extends Omit<UserDTO, 'createdAt' | 'updatedAt'> {
  createdAt: Date
  updatedAt: Date
}

export interface UserSession {
  id: string
  username: string
  iat: number
}

export interface TokenPayload {
  sub: string
  username: string
  iat: number
}
