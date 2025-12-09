import axios from "axios"
import { API_BASE_URL, CHARACTER_ENDPOINT, MESSAGES } from "../../common/Constants/constants"
import type { Character, Episode } from "./character.types"

export const getCharacters = async (page: number, name: string): Promise<Character[]> => {
  try {
    const res = await axios.get<{ results: Character[] }>(`${API_BASE_URL}${CHARACTER_ENDPOINT}`, {
      params: { page, name }
    })
    
    const characters = res.data.results
    const episodeIds = new Set<string>()
    
    characters.forEach((char) => {
      if (char.episode.length > 0) {
        
      }
    })

    if (episodeIds.size === 0) {
      return characters.map(char => ({
        ...char,
        firstEpisodeName: MESSAGES.UNKNOWN_EPISODE
      }))
    }

    const idsString = Array.from(episodeIds).join(",")
    const episodesRes = await axios.get<Episode | Episode[]>(`${API_BASE_URL}/episode/${idsString}`)
    const episodesData = Array.isArray(episodesRes.data) ? episodesRes.data : [episodesRes.data]
    const episodeMap: Record<string, string> = {}
    
    episodesData.forEach((ep: any) => { 
        episodeMap[ep.url] = ep.name 
    })

    const charactersWithEpisodes = characters.map((character) => {
      const firstEpisodeUrl = character.episode[0]
      const episodeName = episodeMap[firstEpisodeUrl] || MESSAGES.UNKNOWN_EPISODE

      return {
        ...character,
        firstEpisodeName: episodeName
      }
    })

    return charactersWithEpisodes

  } catch (error) {
    console.error(error) 
    throw new Error(MESSAGES.ERROR_FETCH)
  }
}