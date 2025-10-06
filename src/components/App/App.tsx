import css from "./App.module.css";
import ReactPaginate from "react-paginate";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/movieService";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieQuery, setMovieQuery] = useState("");

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["movies", movieQuery, currentPage],
    queryFn: () => fetchMovies(movieQuery, currentPage),
    enabled: movieQuery.trim().length > 0,
    placeholderData: keepPreviousData,
    retry: false,
  });

  const handleSearch = async (newQuery: string) => {
    setMovieQuery(newQuery);
    setCurrentPage(1);
  };

  const movies = data?.results ?? [];
  const totalPages = data?.total_pages ?? 0;

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isSuccess && (
        <>
          <MovieGrid onSelect={openModal} movies={movies} />
          {totalPages > 1 && (
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={({ selected }) => setCurrentPage(selected + 1)}
              forcePage={currentPage - 1}
              containerClassName={css.pagination}
              activeClassName={css.active}
              nextLabel="→"
              previousLabel="←"
            />
          )}
        </>
      )}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
}
