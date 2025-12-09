import { LABELS } from "../../common/Constants/constants"

interface Props {
  page: number
  maxPages: number
  onNext: () => void
  onPrev: () => void
  disabled?: boolean
}

export function Pagination({ page, maxPages, onNext, onPrev, disabled }: Props) {
  return (
    <div className="flex gap-4 my-8 justify-center">
      <button
        onClick={onPrev}
        disabled={disabled || page === 1}
        className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40 hover:bg-gray-600 transition text-white"
      >
        {LABELS.PREV}
      </button>

      <span className="flex items-center text-gray-400">
        {page} / {maxPages}
      </span>

      <button
        onClick={onNext}
        disabled={disabled || page === maxPages}
        className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40 hover:bg-gray-600 transition text-white"
      >
        {LABELS.NEXT}
      </button>
    </div>
  )
}