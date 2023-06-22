import { SignJWT, jwtVerify } from 'jose'
import { JWT_SECRET } from '@/config/constants'
import type { TokenPayload } from '@/@types/User'

const ALG = 'HS256'
const SECRET = new TextEncoder().encode(JWT_SECRET)

export const jwtSign = async <T extends Record<string, unknown>>(payload: T) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(SECRET)
}

export const jwtValidate = async (token: string): Promise<TokenPayload> => {
  const { payload } = await jwtVerify(token, SECRET)
  return payload as unknown as TokenPayload
}
