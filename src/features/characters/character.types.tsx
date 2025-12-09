export interface Origin {
  name: string
}

export interface Location {
  name: string
}

export interface Character {
  id: number
  name: string
  image: string
  species: string
  status: string
  gender: string
  origin: Origin
  episode: string[]
  location: Location
  firstEpisodeName?: string
}

export interface Episode {
  id: number;
  name: string;
  url: string;
}