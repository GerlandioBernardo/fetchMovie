import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import type { typeMovie } from '../../types/TypeMovie'
import {FaTrash, FaBoxOpen} from "react-icons/fa";
import { toast } from 'react-toastify';

export default function FavoriteMovie() {

  const [favoriteMovies, setFavoriteMovies] = useState<typeMovie[]>([]);

  useEffect(() => {

    const favorites: typeMovie[] = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    setFavoriteMovies(favorites);
  }, [])

  function removeFavoriteMovie(id: string){
    const updated = favoriteMovies.filter((movie)=> movie.id !== id);
    setFavoriteMovies(updated);
    localStorage.setItem("favoriteMovies", JSON.stringify(updated));
    toast.success("Movie removed successfully");

  }

  return (

    <div>
      <Header />

      {favoriteMovies.length > 0 ? (
        <section className='flex justify-center items-center gap-10 mt-15 pl-11 pr-11 flex-wrap'>
          {favoriteMovies.map((movie) => (

            <div key={movie.id} className='bg-black/80 h-auto w-1/6 text-white mb-9 
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

              <button onClick={()=> removeFavoriteMovie(movie.id)}
                className='flex items-center justify-center gap-2 w-full bg-red-600 
                hover:bg-red-700 text-white font-semibold py-2 rounded 
                cursor-pointer'>
                  <FaTrash/> Remove
              </button>

            </div>

          ))}
        </section>
      ) :
        (
          <div className='flex justify-center items-center gap-6 text-gray-400 mt-20'>
            <FaBoxOpen size={50} />
            <p className='text-lg'>No movies added as favorites yet.</p> 

          </div>
        )
      }
    </div>
  )
}
