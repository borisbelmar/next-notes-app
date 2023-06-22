import { type NoteDTO } from '@/@types/Note'
import NoteList from './components/NoteList'
import { cookies } from 'next/headers'

export default async function NotesPage () {
  const token = cookies().get('token')?.value ?? ''
  const response = await fetch('http://localhost:3000/api/notes', {
    next: {
      revalidate: 60
    },
    headers: {
      Cookie: `token=${token}`
    }
  })

  const notes: NoteDTO[] = await response.json()

  const user = JSON.parse(cookies().get('user')?.value ?? '{}')

  return (
    <main>
      <NoteList
        notesFromSsr={notes}
        username={user.username}
      />
    </main>
  )
}
