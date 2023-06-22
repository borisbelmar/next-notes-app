import type { UserSession } from '@/@types/User'
import { cookies } from 'next/headers'

export const getUserSession = (): UserSession | null => {
  const user = cookies().get('user')?.value
  if (!user) return null
  return JSON.parse(user)
}
