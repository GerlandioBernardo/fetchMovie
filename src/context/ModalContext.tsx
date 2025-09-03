import {createContext, useState, type ReactNode} from 'react'
import type { typeModal, typeMovie } from '../types/TypeMovie'

const ModalContext = createContext<typeModal | undefined>(undefined); 

export function ModalProvider({children }: {children: ReactNode}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<typeMovie | null>(null);

    const openModal = (movie: typeMovie) =>{

        setSelectedMovie(movie);
        setIsOpen(true);
        console.log(movie.vote_average);

    }
    const closeModal = () => {
        setSelectedMovie(null);
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{isOpen, openModal, closeModal, selectedMovie}}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext};
