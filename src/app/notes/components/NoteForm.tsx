import Button from '@/components/Button'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import useNoteCreationForm from '../hooks/useNoteCreationForm'
import type { Note } from '@/@types/Note'

interface NoteCreationFormProps {
  onCancel: () => void
  editingNote?: Note
}

export default function NoteForm ({ onCancel, editingNote }: NoteCreationFormProps) {
  const {
    register,
    handleSubmit,
    errors
  } = useNoteCreationForm({
    onClose: onCancel,
    editingNote
  })

  return (
    <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
      <Input
        label="Título"
        errorMessage={errors.title?.message}
        {...register('title')}
      />
      <TextArea
        label="Contenido"
        errorMessage={errors.content?.message}
        {...register('content')}
      />
      <div className="mt-4 flex space-x-2">
        <Button type="submit">
          {editingNote ? 'Editar tarea' : 'Crear tarea'}
        </Button>
        <Button
          type="button"
          className="bg-transparent hover:bg-primary-600/20"
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>
    </form>
  )
}
