import type { Note } from '@/@types/Note'
import NoteList from './components/NoteList'
import NoteListHeader from './components/NoteListHeader'

const notesMock: Note[] = [
  {
    id: '1',
    title: 'Nota 1',
    createdAt: '2021-10-01T00:00:00.000Z',
    updatedAt: '2021-10-01T00:00:00.000Z',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    userId: '1'
  },
  {
    id: '2',
    title: 'Nota 2',
    createdAt: '2021-10-01T00:00:00.000Z',
    updatedAt: '2021-10-01T00:00:00.000Z',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    userId: '2'
  },
  {
    id: '3',
    title: 'Nota 3',
    createdAt: '2021-10-01T00:00:00.000Z',
    updatedAt: '2021-10-01T00:00:00.000Z',
    content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    userId: '3'
  }
]

export default function NotesPage () {
  return (
    <main>
      <NoteListHeader username="fulanito" />
      <NoteList notes={notesMock} />
    </main>
  )
}
