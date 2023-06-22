import { jwtSign } from '@/lib/jwt'
import prisma from '@/utils/prismaInstance'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

interface UserLoginDTO {
  username: string
  password: string
}

const loginSchema = z.object({
  username: z.string(),
  password: z.string()
})

export default async function login (payload: UserLoginDTO) {
  const { username, password } = loginSchema.parse(payload)

  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })

  if (!user) {
    throw new Error('Invalid credentials')
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw new Error('Invalid credentials')
  }

  const token = await jwtSign({
    sub: user.id,
    username: user.username
  })

  return {
    token
  }
}
