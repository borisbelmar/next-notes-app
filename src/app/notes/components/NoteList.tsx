'use client'

import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import type { NoteDTO } from '@/@types/Note'
import SectionContainer from '@/components/SectionContainer'
import NoteItem from './NoteItem'
import NoteListHeader from './NoteListHeader'
import useLogout from '@/hooks/useLogout'

interface NoteListProps {
  notesFromSsr: NoteDTO[]
  username: string
}

const fetchNotes = async (): Promise<NoteDTO[]> => {
  const response = await axios.get('/api/notes')
  return response.data
}

export default function NoteList ({ notesFromSsr, username }: NoteListProps) {
  const [notes, setNotes] = useState(notesFromSsr)
  const logout = useLogout()

  const fetchNotesAndSet = useCallback(async () => {
    try {
      const notes = await fetchNotes()
      setNotes(notes)
    } catch (error) {
      console.error('error', error)
      await logout()
    }
  }, [logout])

  useEffect(() => {
    fetchNotes()
      .then(setNotes)
      .catch(() => {
        logout().catch(console.error)
      })
  }, [logout])

  return (
    <>
      <NoteListHeader
        username={username}
        onRefetch={fetchNotesAndSet}
      />
      <SectionContainer>
        <ul className="grid grid-cols-4 gap-4">
          {notes.map(note => (
            <NoteItem key={note.id} note={note} onRefetch={fetchNotesAndSet} />
          ))}
        </ul>
      </SectionContainer>
    </>
  )
}
