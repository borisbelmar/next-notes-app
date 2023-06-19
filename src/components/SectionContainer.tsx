import clsx from 'clsx'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

export default function SectionContainer ({
  children,
  className
}: SectionContainerProps) {
  return (
    <section
      className={clsx('max-w-screen-lg mx-auto px-4', className)}
    >
      {children}
    </section>
  )
}
