'use client'

import { type ComponentProps, useId, forwardRef } from 'react'
import InputLabel from './InputLabel'

interface TextAreaProps extends ComponentProps<'textarea'> {
  label?: string
  name: string
  placeholder?: string
  errorMessage?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function InnerTextArea ({
  label,
  name,
  placeholder,
  errorMessage,
  ...props
}: TextAreaProps, ref) {
  const id = useId()

  return (
    <div>
      <InputLabel id={id} label={label} />
      <div className="mt-1">
        <textarea
          ref={ref}
          name={name}
          id={id}
          placeholder={placeholder}
          className="bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm h-32 resize-none0"
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

export default TextArea
