export type typeMovie = {
    id: string,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number
}

export type typeModal = {
    isOpen: boolean,
    selectedMovie: typeMovie | null,
    openModal: (movie: typeMovie) => void,
    closeModal: ()=> void,
}