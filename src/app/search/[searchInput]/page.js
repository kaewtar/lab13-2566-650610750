"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({ params }) {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  // const processedSearchInput = ...

  /*tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true
  const result = processedSearchInput.includes(MovieRow.name)

  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  const filteredMovies = movieDB.filter((movie) =>
    you code here...
  );
  */
  const searchInput = params.searchInput;
  const processedSearchInput = searchInput.replaceAll("%20", " ");

  const filteredMoviesMovie = movieDB.filter((movie) =>
    movie.title.toUpperCase().includes(processedSearchInput.toUpperCase())
  );

  if (!filteredMoviesMovie) {
    return <p className="text-center"> Movie not found </p>;
  }

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">
        Found {filteredMoviesMovie.length} result(s)
      </p>
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
      {filteredMoviesMovie.map((movie, i) => (
        <MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          detail={movie.detail}
          rating={movie.rating}
          number={i + 1}
        />
      ))}
    </div>
  );
}
