import { CharacterCard } from "./features/characters/characterCard" 
import { Search } from "./features/search/Search"
import { Pagination } from "./features/Pagination/pagination"
import { useCharacters } from "./features/characters/useCharacters"
import { MAX_PAGES, MESSAGES } from "./common/Constants/constants"

export function App() {
  const { 
    characters, 
    page, 
    handleNext,
    handlePrev, 
    search, 
    setSearch, 
    error, 
    loading 
  } = useCharacters()

  return (
    <div className="text-white flex flex-col w-full min-h-screen bg-neutral-900">

<div className="w-full h-auto md:h-[300px] flex flex-col md:flex-row items-center justify-between bg-cover bg-center shadow-lg mb-8 relative overflow-hidden py-8 md:py-0">
    <div className="absolute inset-0 bg-black/50"></div>
    
    <div className="relative z-10 flex-1 flex flex-col items-center justify-center md:items-start px-4 md:pl-24 w-full">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md text-center md:text-left text-white">
            {MESSAGES.TITLE}
        </h1>
        <div className="w-full flex justify-center md:justify-start">
           <Search value={search} onChange={setSearch} /> 
        </div>

    </div>
      <img  src="src/assets/image.png" 
       className="relative z-20 h-40 md:h-[85%] w-auto object-contain mt-6 md:mt-0 md:mr-10 drop-shadow-xl"
      />

</div>

      {error && <p className="text-red-500 text-center font-bold mb-4">{error}</p>}

      <div className="flex flex-wrap justify-center px-4">
        {characters.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
      
      <Pagination 
        page={page} 
        maxPages={MAX_PAGES} 
        onPrev={handlePrev}
        onNext={handleNext}
        disabled={loading}
      />
    </div>
  )
}