import { type NoteDTO } from '@/@types/Note'
import NoteList from './components/NoteList'
import { cookies, headers } from 'next/headers'

export default async function NotesPage () {
  const token = cookies().get('token')?.value ?? ''
  const fullUrl = headers().get('referer') ?? ''
  const fetchUrl = new URL('/api/notes', fullUrl)

  const response = await fetch(fetchUrl.href, {
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
