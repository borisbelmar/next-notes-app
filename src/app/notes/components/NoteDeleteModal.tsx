import Modal from '@/components/Modal'

interface NoteDeleteModalProps {
  isModalOpen: boolean
  onModalClose: () => void
  onConfirm: () => void
}

export default function NoteDeleteModal ({
  isModalOpen,
  onModalClose,
  onConfirm
}: NoteDeleteModalProps) {
  return (
    <Modal
      title="¿Estás seguro de eliminar esta nota?"
      isModalOpen={isModalOpen}
      onModalClose={onModalClose}
    >
      <div className="flex justify-start gap-2 mt-6">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          Eliminar
        </button>
        <button
          type="button"
          className="bg-transparent hover:bg-primary-600/20 text-primary-500 hover:text-primary-500/80 px-4 py-2 rounded"
          onClick={onModalClose}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  )
}
