import prisma from '@/utils/prismaInstance'

export default async function deleteNote (id: string) {
  return await prisma.note.delete({
    where: {
      id
    }
  })
}
