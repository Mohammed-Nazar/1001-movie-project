"use client";
import React, { useRef } from "react";
import DetiailsHero from "./DetiailsHero";
import MovieDetail from "./MovieDetail";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Details = ({ details, videos }) => {
  const src = "https://image.tmdb.org/t/p/original";
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="pt-10 mx-10 w-6/12 ml-72 mt-2 mb-36">
      <DetiailsHero details={details} src={src} />
      <MovieDetail details={details} />
      <h1 className="text-2xl font-bold text-white" id="videos">Videos & Trailers</h1>
      <div className="px-10 relative h-[60vh]">
        <Carousel
          plugins={[plugin.current]}
          className=" max-w-screen-sm max-h-[9rem] "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {videos.results.map((e, index) => (
              <CarouselItem key={index}>
                <div className="p-1 relative px-8 mt-10">
                  <Card>
                    <CardContent className=" rounded-lg flex p-0 items-center justify-center">
                        <iframe
                          className=" rounded-2xl w-full h-[40vh] "
                          src={`https://www.youtube.com/embed/${e.key}`}
                        ></iframe>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Details;
