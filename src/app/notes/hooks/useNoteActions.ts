import type { Note } from '@/@types/Note'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface Props {
  note: Note
}

export default function useNoteActions ({ note }: Props) {
  const [editingNote, setEditingNote] = useState<Note | null>(null)
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

  const handleDeleteConfirm = () => {
    console.log('delete', note.id)
    setDeleteModalOpen(false)
    toast.success('Nota eliminada')
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
