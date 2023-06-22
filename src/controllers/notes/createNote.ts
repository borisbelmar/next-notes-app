import { z } from 'zod'
import prisma from '@/utils/prismaInstance'

const noteCreationSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(3)
})

export default async function createNote (
  payload: z.infer<typeof noteCreationSchema>,
  userId: string
) {
  const note = noteCreationSchema.parse(payload)
  const noteWithUserId = { ...note, userId }
  return await prisma.note.create({ data: noteWithUserId })
}
