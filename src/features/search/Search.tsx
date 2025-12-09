import { MESSAGES } from "../../common/Constants/constants"

interface Props {
  value: string
  onChange: (value: string) => void
}

export function Search({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder={MESSAGES.SEARCH_PLACEHOLDER}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-md px-4 py-3 rounded-lg bg-neutral-800/90 text-white placeholder-gray-400 border border-gray-600 shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all backdrop-blur-sm"
    />
  )
}