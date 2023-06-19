'use client'

import { type ComponentProps, forwardRef, useId } from 'react'
import InputLabel from './InputLabel'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  name: string
  placeholder?: string
  errorMessage?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function InnerInput ({
  label,
  name,
  placeholder,
  errorMessage,
  ...props
}: InputProps, ref) {
  const id = useId()

  return (
    <div>
      <InputLabel id={id} label={label} />
      <div className="mt-1">
        <input
          ref={ref}
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          className="bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm"
          {...props}
        />
      </div>
      {errorMessage !== undefined && (
        <p className="text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  )
})

export default Input
