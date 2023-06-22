import { NextResponse } from 'next/server'
import { z } from 'zod'
import createNote from '@/controllers/notes/createNote'
import getAllNotes from '@/controllers/notes/getAllNotes'
import { getUserSession } from '@/lib/session'

export const GET = async () => {
  const user = getUserSession()

  const notes = await getAllNotes(user?.id ?? '')
  return NextResponse.json(notes)
}

export const POST = async (req: Request) => {
  try {
    const user = getUserSession()
    console.log('user', user)
    const payload = await req.json()
    const createdNote = await createNote(payload, user?.id ?? '')
    return NextResponse.json(createdNote)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 })
    }
    console.error(error)
    return new Response('unknown error', { status: 500 })
  }
}
