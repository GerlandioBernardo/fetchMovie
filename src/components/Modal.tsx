import { useModal } from '../hook/useModal';
import { FaTimes, FaHeart} from "react-icons/fa";
import { toast } from 'react-toastify';


export default function Modal() {

  const { selectedMovie, isOpen, closeModal } = useModal();

  function addFavorite(){
    if(!selectedMovie) return;

    localStorage.setItem("favoriteMovie", JSON.stringify(selectedMovie));
    toast.success("Movie added successfully");

    // const favorite = JSON.parse(localStorage.getItem("favoriteMovie") || "null");
    // console.log(favorite);

  }

  if (!isOpen || !selectedMovie) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 h-auto">
      <div className="bg-white pt-6 rounded-lg relative w-80">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 
          cursor-pointer transition"
        >
          <FaTimes size={22} />
        </button>

        <div className='flex justify-center mb-3'>
          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className='rounded-lg shadow-lg w-60 h-75'
          />
        </div>
        <div className='text-blue-700 font-bold text-center grid ' >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            {selectedMovie.title}
          </h2>
          <p className="text-center text-sm text-gray-500">
            📅 {selectedMovie.release_date}
          </p>
        </div>
        <div className='text-gray-500 text-center font-semibold pt-2 pb-1 pl-2 pr-2 mb-2'>
          {selectedMovie.overview.length > 150
            ? selectedMovie.overview.slice(0, 150) + "..."
            : selectedMovie.overview
          }
        </div>

         <div className="flex justify-center mb-2">
          <button
            onClick={addFavorite}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 
            text-white rounded font-semibold hover:bg-red-700 transition 
            cursor-pointer"
          >
            <FaHeart />
            Favorite
          </button>
        </div>
      </div>
    </div>

  )
}
