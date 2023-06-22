import login from '@/controllers/auth/login'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const payload = await req.json()

  const loginToken = await login(payload)

  return NextResponse.json(loginToken)
}
