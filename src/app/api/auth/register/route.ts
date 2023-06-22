import register from '@/controllers/auth/register'
import { Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export const POST = async (req: Request) => {
  try {
    const payload = await req.json()

    const user = await register(payload)

    return NextResponse.json(user)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return new Response('Username already exists', {
          status: 409
        })
      }
    } else if (error instanceof z.ZodError) {
      return new Response(error.message, {
        status: 400
      })
    }
    console.error(error)
    return new Response('An error occurred', {
      status: 500
    })
  }
}
