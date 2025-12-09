import { useState, useEffect, useCallback, useTransition } from "react"
import { getCharacters } from "./character.api" 
import { MAX_PAGES, MESSAGES } from "../../common/Constants/constants"
import type { Character } from "./character.types"
import { useDebouncedValue } from "../../common/hooks/useDebounce"

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")
  const [loading, startTransition] = useTransition()
  const [debounced] = useDebouncedValue(search, 200);

  const fetchData = useCallback((pageToFetch: number) => {
    startTransition(async () => {
      try {
        setError("")
        const result = await getCharacters(pageToFetch, debounced)

        if (result && result.length > 0) {
            setCharacters(result)
            setPage(pageToFetch) 
        } else {
            setError(MESSAGES.ERROR_LOAD || "No hay más resultados")
        }
      } catch {
        setError(MESSAGES.ERROR_LOAD)
      }
    })
  }, [debounced]) 

  const handleNext = () => {
    if (page < MAX_PAGES) {
        fetchData(page + 1)
    }
  }

  const handlePrev = () => {
    if (page > 1) {
        fetchData(page - 1)
    }
  }

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  useEffect(() => {
    fetchData(1)
  }, [debounced, fetchData])


  return { 
    characters, 
    page, 
    handleNext, 
    handlePrev,
    search, 
    setSearch: handleSearch, 
    error,
    loading 
  }
}