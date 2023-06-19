import type { ComponentProps } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button ({
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'px-4 py-2 rounded bg-primary-700 hover:bg-primary-600 transition',
    className
  )

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}
