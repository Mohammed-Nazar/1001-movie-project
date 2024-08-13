import {
  genresList,
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upComingMovies,
} from "@/API/mainApi";
import Card from "@/components/Card/Card";
import Main from "@/components/Main/Main";
import PaginationComponent from "../components/pagination/Pagination.jsx";

export default async function Home({ searchParams }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const pagesToFetch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  // Fetch movie data in parallel
  const [popularMoviesData, topRatedMoviesData, upComingMoviesData, nowPlayingMoviesData, genres] = await Promise.all([
    Promise.all(pagesToFetch.map((pageNum) => popularMovies(pageNum))),
    Promise.all(pagesToFetch.map((pageNum) => topRatedMovies(pageNum))),
    Promise.all(pagesToFetch.map((pageNum) => upComingMovies(pageNum))),
    nowPlayingMovies(1),
    genresList(),
  ]);

  // Combine the results from all pages
  const allPopularMovies = popularMoviesData.flatMap(data => data.results);
  const allTopRatedMovies = topRatedMoviesData.flatMap(data => data.results);
  const allUpComingMovies = upComingMoviesData.flatMap(data => data.results);
  const nowPlayingMoviesResults = nowPlayingMoviesData.results;

  // Combine all movie data
  let allMovies = [
    ...allUpComingMovies,
    ...allPopularMovies,
    ...allTopRatedMovies,
    ...nowPlayingMoviesResults,
  ];

  // Pagination logic
  const moviesPerPage = 10;
  const totalMovies = allMovies.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const paginatedMovies = allMovies.slice((page - 1) * moviesPerPage, page * moviesPerPage);

  return (
    <div className="flex flex-col justify-center">
      <Main data={nowPlayingMoviesData} genres={genres} />
      <div className="mt-5 relative grid grid-cols-3 gap-y-5 place-items-center">
        {paginatedMovies.map((movie) => (
          <Card key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>
      <div className="text-center my-10 flex shrink-1 text-sm">
        {page <= totalPages ? (
          <PaginationComponent length={totalPages} page={page} className="max-w-24 flex" />
        ) : (
          <div>404 Content not available</div>
        )}
      </div>
    </div>
  );
}
