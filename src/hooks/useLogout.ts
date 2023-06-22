import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function useLogout () {
  const router = useRouter()

  const logout = useCallback(async () => {
    Cookies.remove('token')
    Cookies.remove('user')
    await axios.post('/api/auth/logout')
    router.replace('/')
  }, [router])

  return logout
}
