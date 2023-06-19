import type { Note } from '@/@types/Note'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'

const schema = z.object({
  title: z.string()
    .nonempty('El título es requerido')
    .min(3, 'El título debe tener al menos 3 caracteres'),
  content: z.string()
    .max(1000, 'El contenido no puede tener más de 1000 caracteres')
})

interface Props {
  onClose: () => void
  editingNote?: Note
}

export default function useNoteCreationForm ({ onClose, editingNote }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: editingNote?.title ?? '',
      content: editingNote?.content ?? ''
    },
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: Pick<Note, 'title' | 'content'>): void => {
    if (editingNote) {
      console.log('editando nota', { ...editingNote, data })
      toast.success('Nota editada')
    } else {
      console.log('creando nota', data)
      toast.success('Nota creada')
    }
    onClose()
  }

  return {
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit)
  }
}
