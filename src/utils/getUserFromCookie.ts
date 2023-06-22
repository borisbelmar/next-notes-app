import type { UserSession } from '@/@types/User'
import Cookie from 'js-cookie'
import { decodeJwt } from 'jose'

export default function getUserFromCookie () {
  const token = Cookie.get('token')

  if (!token) {
    return
  }

  return decodeJwt(token) as unknown as UserSession
}
