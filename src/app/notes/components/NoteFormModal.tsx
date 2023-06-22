'use client'

import Modal from '@/components/Modal'
import NoteCreationForm from './NoteForm'
import type { NoteDTO } from '@/@types/Note'

interface NoteModalProps {
  isModalOpen: boolean
  onModalClose: () => void
  editingNote?: NoteDTO
  onRefetch: () => Promise<void>
}

export default function NoteFormModal ({
  isModalOpen,
  onModalClose,
  editingNote,
  onRefetch
}: NoteModalProps) {
  return (
    <Modal
      title={editingNote ? `Editar nota ${editingNote.id}` : 'Crear nota'}
      isModalOpen={isModalOpen}
      onModalClose={onModalClose}
    >
      <NoteCreationForm
        onCancel={onModalClose}
        editingNote={editingNote}
        onRefetch={onRefetch}
      />
    </Modal>
  )
}
