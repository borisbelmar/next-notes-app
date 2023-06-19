import Modal from '@/components/Modal'
import NoteCreationForm from './NoteForm'
import type { Note } from '@/@types/Note'

interface NoteModalProps {
  isModalOpen: boolean
  onModalClose: () => void
  editingNote?: Note
}

export default function NoteFormModal ({
  isModalOpen,
  onModalClose,
  editingNote
}: NoteModalProps) {
  return (
    <Modal
      title={editingNote ? `Editar nota ${editingNote.id}` : 'Crear nota'}
      isModalOpen={isModalOpen}
      onModalClose={onModalClose}
    >
      <NoteCreationForm onCancel={onModalClose} editingNote={editingNote} />
    </Modal>
  )
}
