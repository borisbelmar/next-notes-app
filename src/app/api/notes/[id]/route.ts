import { Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'
import deleteNote from '@/controllers/notes/deleteNote'
import getNoteById from '@/controllers/notes/getNoteById'
import updateNote from '@/controllers/notes/updateNote'

interface NoteParams {
  params: {
    id: string
  }
}

export const GET = async (_req: Request, { params }: NoteParams) => {
  const { id } = params
  const note = await getNoteById(id)

  if (!note) {
    return new Response('not_found', { status: 404 })
  }

  return NextResponse.json(note)
}

export const PUT = async (req: Request, { params }: NoteParams) => {
  try {
    const payload = await req.json()
    const { id } = params

    const note = await updateNote(id, payload)

    return NextResponse.json(note)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return new Response('not_found', { status: 404 })
      }
    }
    console.error(error)
    return new Response('internal_server_error', { status: 500 })
  }
}

export const DELETE = async (_req: Request, { params }: NoteParams) => {
  try {
    const { id } = params

    const deletedNote = await deleteNote(id)

    return NextResponse.json(deletedNote)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return new Response('not_found', { status: 404 })
      }
    }
    console.error(error)
    return new Response('internal_server_error', { status: 500 })
  }
}
