import type { NoteDTO } from '@/@types/Note'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import useLogout from '@/hooks/useLogout'

const schema = z.object({
  title: z.string()
    .nonempty('El título es requerido')
    .min(3, 'El título debe tener al menos 3 caracteres'),
  content: z.string()
    .max(1000, 'El contenido no puede tener más de 1000 caracteres')
})

interface Props {
  onClose: () => void
  editingNote?: NoteDTO
  onRefetch: () => Promise<void>
}

export default function useNoteForm ({ onClose, editingNote, onRefetch }: Props) {
  const logout = useLogout()
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

  const onSubmit = async (data: Pick<NoteDTO, 'title' | 'content'>): Promise<void> => {
    try {
      if (editingNote) {
        await axios.put(`/api/notes/${editingNote.id}`, data)
        toast.success('Nota editada')
      } else {
        await axios.post('/api/notes', data)
        toast.success('Nota creada')
      }
      onClose()
      await onRefetch()
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        if (error.response?.status === 401) {
          toast.error('No autorizado')
          await logout()
          return
        }
      }
      toast.error('Error al guardar nota')
      console.error(error)
    }
  }

  return {
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit)
  }
}
