import bcrypt from 'bcryptjs'
import prisma from '@/utils/prismaInstance'
import { z } from 'zod'

interface UserRegisterDTO {
  username: string
  password: string
}

const registerSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(20)
})

export default async function register (payload: UserRegisterDTO) {
  const { username, password } = registerSchema.parse(payload)

  const newUser = await prisma.user.create({
    data: {
      username,
      password: await bcrypt.hash(password, 10)
    }
  })

  return newUser
}
