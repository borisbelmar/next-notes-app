import { cookies } from 'next/headers'

export const POST = async (req: Request) => {
  cookies().delete('user')
  cookies().delete('token')
  return new Response('ok')
}
