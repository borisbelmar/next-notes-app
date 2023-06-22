import prisma from '@/utils/prismaInstance'

export default async function getNoteById (id: string) {
  return await prisma.note.findFirst({
    where: {
      id
    }
  })
}
