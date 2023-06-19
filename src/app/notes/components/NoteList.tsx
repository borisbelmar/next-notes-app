import type { Note } from '@/@types/Note'
import SectionContainer from '@/components/SectionContainer'
import NoteItem from './NoteItem'

interface NoteListProps {
  notes: Note[]
}

export default function NoteList ({ notes }: NoteListProps) {
  return (
    <SectionContainer>
      <ul className="grid grid-cols-4 gap-4">
        {notes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
    </SectionContainer>
  )
}
