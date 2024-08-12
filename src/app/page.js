import { genresList, nowPlayingMovies } from "@/API/mainApi";
import Main from "@/components/Main/Main";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default async function Home() {
  const data = await nowPlayingMovies(1);
  const genres = await genresList();
  return (
  <div className="flex">
  
    <Main data={data} genres={genres}/>
  </div>
  );
}
