export const API_BASE_URL = "https://rickandmortyapi.com/api"
export const CHARACTER_ENDPOINT = "/character"
export const MAX_PAGES = 42

export const STATUS = {
  ALIVE: "Alive",
  DEAD: "Dead",
  UNKNOWN: "unknown"
} as const

export const MESSAGES = {
  ERROR_FETCH: "No se pudieron obtener los datos",
  ERROR_LOAD: "Error al cargar personajes.",
  UNKNOWN_EPISODE: "Unknown Episode",
  SEARCH_PLACEHOLDER: "Buscar personaje...",
  TITLE: "Rick and Morty Api"
}

export const LABELS = {
  ORIGIN: "Origin:",
  LOCATION: "Location:",
  FIRST_SEEN: "First seen in:",
  NEXT: "Siguiente",
  PREV: "Anterior"
}

export const STATUS_COLORS = {
  [STATUS.ALIVE]: "bg-green-500",
  [STATUS.DEAD]: "bg-red-500",
  [STATUS.UNKNOWN]: "bg-gray-500"
}