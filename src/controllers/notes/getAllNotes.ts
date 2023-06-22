import type { Note } from '@/@types/Note'
import prisma from '@/utils/prismaInstance'

export default async function getAllNotes (userId: string): Promise<Note[]> {
  return await prisma.note.findMany({
    where: {
      userId
    }
  })
}
