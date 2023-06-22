import SectionContainer from '@/components/SectionContainer'
import dynamic from 'next/dynamic'

export default function Home () {
  // This is a dynamic import, it will only be loaded on the client side
  const HomeButton = dynamic(async () => await import('@/components/HomeButton'), { ssr: false })

  return (
    <main>
      <SectionContainer className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">
          Aplicación de notas
        </h1>
        <p className="text-xl mb-8">
          Aplicación para guardar todas tus notas
        </p>
        <HomeButton />
      </SectionContainer>
    </main>
  )
}
