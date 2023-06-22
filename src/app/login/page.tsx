import Link from 'next/link'
import LoginForm from './components/LoginForm'

export default function LoginPage () {
  return (
    <main className="mx-auto max-w-screen-lg p-16">
      <h1 className="text-3xl font-bold">Iniciar sesión</h1>
      <p className="text-xl mt-4">
        Bienvenido a la página de inicio de sesión.
        {' '}
        Si no tienes una cuenta <Link href="/register" replace className="text-primary-500 hover:text-primary-400 transition">regístrate</Link>.
      </p>

      <LoginForm />
    </main>
  )
}
