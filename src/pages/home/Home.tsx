import { useState, useEffect } from 'react'
import Header from '../../components/Header';
import apiTmdb from '../../services/ApiTmdb';
import type { typeMovie } from '../../types/TypeMovie';
import { useModal } from '../../hook/useModal';

export default function Home() {

  const [movies, setMovies] = useState<typeMovie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const {openModal} = useModal();

  async function fetchMovies(pageNumber: number){
    try {
      
      const response = await apiTmdb.get("/movie/popular", {
        params:{
          page: pageNumber
        }
      });

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      setError("");

    } catch {
      setError("Error loading movies.")
    }
  }

  async function searchMovie(title: string){

    const result = movies.filter((m)=>{
      m.title.toLowerCase().includes(title.toLowerCase());
    })

    if(result.length > 0){
      setMovies(result);
      setError("");
      return;
    }
  }

  
  useEffect(()=>{
    if(query.trim() === ""){
      fetchMovies(page);
    }
  },[page, query])

  useEffect(()=>{
    if(query.trim() === "") return;

    const debounce = setTimeout(()=>{
      searchMovie(query);
    }, 400);

    return ()=> clearTimeout(debounce);

  }, [query])

  function handleSubmit(id: string){
    
    const movie = movies.find(m => m.id === id);
    if(movie){
        openModal(movie);
    }

  }

  return (
    <div>
      <Header />
      <section className='mt-9'>
        <h1 className='text-center text-red-600 pb-2 font-bold text-[18px]'>Search Movie</h1>
        <div className='flex justify-center items-center '>
          <div>
            <input onChange={(event)=> setQuery(event.target.value)}  value={query}
            className='border-2 border-red-800 focus:border-red-500 pl-2
              outline-none w-100 h-9 text-[16px] text-gray-200 placeholder:text-gray-400'
              type="text" placeholder='Enter the name of the movie' required />
          </div>
        </div>
      </section>

      <div className='mt-7'>
        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
      </div>

      <section className='grid grid-cols-5 mt-15 justify-items-center pl-11 pr-11'>
        {movies.map((movie) => (

          <div key={movie.id} className='bg-black/80 h-auto w-55 text-white mb-9 
          border-1 border-blue-300 p-2'>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='rounded mb-2'
              />
            </div>
            <div >
               <p className="text-yellow-400 font-bold mb-2 flex justify-center items-center">⭐ Nota: {movie.vote_average}</p>
            </div>
            <button onClick={()=> handleSubmit(movie.id)} className='bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900
            transition-colors ease-in-out duration-500 transform 
             text-white text-[16px] font-bold pt-1.5 pb-1.5 rounded w-50 cursor-pointer 
              hover:-translate-y-[1px] hover:scale-[1.01]'>
              View details
            </button>

          </div>

        ))}
      </section>
      <section>
        {query.trim() === "" && (
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1).map(num => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-3 py-1 rounded cursor-pointer ${page === num ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"
                }`}
            >
              {num}
            </button>
          ))}
          
        </div>
        )}
      </section>

    </div>
  )
}
