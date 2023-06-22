import type { NoteDTO } from '@/@types/Note'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import useLogout from '@/hooks/useLogout'

interface Props {
  note: NoteDTO
  onRefetch: () => Promise<void>
}

export default function useNoteActions ({ note, onRefetch }: Props) {
  const logout = useLogout()
  const [editingNote, setEditingNote] = useState<NoteDTO | null>(null)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

  const handleEdit = () => {
    setEditingNote(note)
  }

  const handleModalClose = () => {
    setEditingNote(null)
  }

  const handleDelete = () => {
    setDeleteModalOpen(true)
  }

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false)
  }

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`/api/notes/${note.id}`)
      setDeleteModalOpen(false)
      toast.success('Nota eliminada')
      await onRefetch()
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        if (error.response?.status === 401) {
          toast.error('No autorizado')
          await logout()
          return
        }
      }
      toast.error('Error al eliminar nota')
      console.error(error)
    }
  }

  return {
    editingNote,
    isDeleteModalOpen,
    handleEdit,
    handleModalClose,
    handleDelete,
    handleDeleteModalClose,
    handleDeleteConfirm
  }
}
