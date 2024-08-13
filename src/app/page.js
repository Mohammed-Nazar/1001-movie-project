import {
  genresList,
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  SearchQuery,
  upComingMovies,
} from "@/API/mainApi";
import Card from "@/components/Card/Card";
import Main from "@/components/Main/Main";
import PaginationComponent from "../components/pagination/Pagination.jsx";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const page = searchParams.page ? searchParams.page : 1;


  const array = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  let popularMoviesData = await popularMovies(1);
  let topRatedMoviesData = await topRatedMovies(1);
  let upComingMoviesData = await upComingMovies(1);
  for (let i = 0; i < array.length; i++) {
    const popularMoviesData2 = await popularMovies(array[i]);
    const topRatedMoviesData2 = await topRatedMovies(array[i]);
    const  upComingMoviesData2 = await upComingMovies(array[i]);
    popularMoviesData.results.push(...popularMoviesData2.results);
    topRatedMoviesData.results.push(...topRatedMoviesData2.results);
    upComingMoviesData.results.push(...upComingMoviesData2.results);
  }
  const data = await nowPlayingMovies(1);

  const genres = await genresList();

  let movies = [];

  const pagination = (page) => {
    const skip = (page - 1) * 10;
    upComingMoviesData.results.map((movie) => {
      movies.push(movie);
    });
    popularMoviesData.results.map((movie) => {
      movies.push(movie);
    });
    topRatedMoviesData.results.map((movie) => {
      movies.push(movie);
    });
    data.results.map((movie) => {
      movies.push(movie);
    });
    movies = movies.slice(skip, skip + 10);
  };
  pagination(page);
  const length = Math.ceil(
    (topRatedMoviesData.results.length +
      data.results.length +
      popularMoviesData.results.length) /
      10
  );

  return (
    <div className="flex flex-col justify-center">
      <Main data={data} genres={genres} />
      <div className="ml-72 mt-60 grid grid-cols-2 w-6/12 gap-y-5 gap-2 ">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} genres={genres} />;
        })}
      </div>
      
      <div className="text-center my-10 mr-16">
        {
          page <= length ? 
          <PaginationComponent length={length} page={page} />
          : <div>404 Content not availbe</div>
        }
      </div>
    </div>
  );
}
