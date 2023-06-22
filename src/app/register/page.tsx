import Link from 'next/link'
import RegisterForm from './components/RegisterForm'

export default function RegisterPage () {
  return (
    <main className="mx-auto max-w-screen-lg p-16">
      <h1 className="text-3xl font-bold">Registrarse</h1>
      <p className="text-xl mt-4">
        Bienvenido a la página de registro.
        {' '}
        Si ya tienes una cuenta <Link href="/login" replace className="text-primary-500 hover:text-primary-400 transition">Inicia sesión</Link>.
      </p>

      <RegisterForm />
    </main>
  )
}
