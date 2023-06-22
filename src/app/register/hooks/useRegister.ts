import type { UserDTO } from '@/@types/User'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const schema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(20)
})

export default function useRegister () {
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit = useCallback(async (data: Pick<UserDTO, 'username' | 'password'>) => {
    const response = await axios.post('/api/auth/register', data)
    const { token } = response.data
    Cookies.set('token', token)

    router.replace('/notes')
  }, [router])

  return {
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit)
  }
}
