interface InputLabelProps {
  label?: string
  id: string
}

export default function InputLabel ({ id, label }: InputLabelProps) {
  if (label === undefined) return null

  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-400"
    >
      {label}
    </label>
  )
}
