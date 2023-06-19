import Button from '@/components/Button'
import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'

export default function Home () {
  return (
    <main>
      <SectionContainer className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">
          Aplicación de notas
        </h1>
        <p className="text-xl mb-8">
          Aplicación para guardar todas tus notas
        </p>
        <Link href="/notes">
          <Button>
            Entrar a la aplicación
          </Button>
        </Link>
      </SectionContainer>
    </main>
  )
}
