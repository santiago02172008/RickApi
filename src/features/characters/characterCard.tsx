import { memo } from "react"
import type { Character } from "./character.types"
import { STATUS, STATUS_COLORS, LABELS } from "../../common/Constants/constants"

type Props = Character

export const CharacterCard = memo(function CharacterCard({
  name,
  image,
  status,
  species,
  gender,
  origin,
  location,
  firstEpisodeName
}: Props) {

  const statusKey = status as keyof typeof STATUS_COLORS
  const statusColor = STATUS_COLORS[statusKey] || STATUS_COLORS[STATUS.UNKNOWN]

  return (
    <div className="flex flex-col sm:flex-row m-2 w-full sm:w-[480px] h-auto sm:h-40 border border-gray-500 rounded shadow overflow-hidden bg-neutral-800 transition-transform hover:scale-105">
      
      <div className="w-full h-48 sm:w-36 sm:h-full shrink-0"> 
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col justify-start p-3">
        <h2 className="text-xl font-bold text-white truncate">{name}</h2>

        <div className="flex items-center mt-1">
            <span className={`w-2 h-2 rounded-full mr-2 ${statusColor}`}></span>
            <p className="text-sm text-gray-300 font-medium">
              {status} |  {gender} - {species}
            </p>
        </div>

        <div className="mt-2 space-y-1">
          <p className="text-xs text-gray-400">
            <span className="text-sm text-gray-300 font-medium">{LABELS.ORIGIN}</span> {origin.name}
          </p>
          <p className="text-xs text-gray-400">
            <span className="text-sm text-gray-300 font-medium">{LABELS.LOCATION}</span> {location.name}
          </p>
          <p className="text-xs text-gray-400">
            <span className="text-sm text-gray-300 font-medium">{LABELS.FIRST_SEEN} </span> {firstEpisodeName}
          </p>
        </div>
      </div>
    </div>
  )
})