import { movieDetails, MovieVideos } from "@/API/movieDetailsApi";
import React from "react";
import Details from "./components/Details";

const page = async ({ params }) => {
  const details = await movieDetails(params.id);
  const videos = await MovieVideos(params.id);

  return <>
    <Details details={details} videos={videos}/>
  </>;
};

export default page;
