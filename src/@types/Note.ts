export interface NoteDTO {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  userId: string
}

export interface Note extends Omit<NoteDTO, 'createdAt' | 'updatedAt'> {
  createdAt: Date
  updatedAt: Date
}
