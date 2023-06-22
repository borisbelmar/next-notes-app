'use client'

import Input from '@/components/Input'
import useLogin from '../hooks/useLogin'
import Button from '@/components/Button'

export default function LoginForm () {
  const { handleSubmit, register, errors } = useLogin()

  return (
    <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
      <Input
        label="Usuario"
        errorMessage={errors.username?.message}
        {...register('username')}
      />
      <Input
        label="Contraseña"
        type="password"
        errorMessage={errors.password?.message}
        {...register('password')}
      />
      <div className="mt-4 flex space-x-2">
        <Button type="submit">
          Iniciar sesión
        </Button>
      </div>
    </form>
  )
}
