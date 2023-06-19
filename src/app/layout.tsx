import './globals.css'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Notes App',
  description: 'App for taking notes'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({
  children
}: RootLayoutProps) {
  return (
    <html lang="es">
      <body
        className={clsx(
          inter.className,
          'bg-gray-950 text-white'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
