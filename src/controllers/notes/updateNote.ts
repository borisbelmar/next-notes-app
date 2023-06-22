import { z } from 'zod'
import prisma from '@/utils/prismaInstance'

const noteUpdateSchema = z.object({
  title: z.string().min(3).optional(),
  content: z.string().min(3).optional()
})

export default async function updateNote (
  id: string,
  payload: z.infer<typeof noteUpdateSchema>
) {
  const note = noteUpdateSchema.parse(payload)
  return await prisma.note.update({
    where: {
      id
    },
    data: note
  })
}
