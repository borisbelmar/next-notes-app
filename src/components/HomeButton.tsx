'use client'

import { useRouter } from 'next/navigation'
import Button from './Button'
import getUserFromCookie from '@/utils/getUserFromCookie'

export default function HomeButton () {
  const username = getUserFromCookie()?.username
  const router = useRouter()

  const handleClick = () => {
    router.push(username ? '/notes' : '/login')
  }

  return (
    <div>
      {username && (
        <p className="mb-4">
          Hola @{username} 👋
        </p>
      )}
      <Button onClick={handleClick} type="button">
        Entrar a la aplicación
      </Button>
    </div>
  )
}
