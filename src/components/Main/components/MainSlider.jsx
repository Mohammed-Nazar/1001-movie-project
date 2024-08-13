"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function MainSlider({ data, genres }) {
  const src = "https://image.tmdb.org/t/p/original";
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" max-h-[9rem] "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.results.map((e, index) => (
          <CarouselItem key={index}>
            <div className="p-1 relative">
              <Card>
                <CardContent className=" rounded-lg flex p-0 items-center justify-center">
                  <div className="w-full relative h-">
                    <img
                      className=" rounded-2xl  h-fit object-cover"
                      src={src + e.backdrop_path}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black  to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-16 ">
                      <Link href={`/${e.id}`}>
                        <h1 className="text-white text-4xl font-bold font-mono backdrop-blur-[1.2px] px-3 py-2 rounded-xl">
                          {e.title}
                        </h1>
                      </Link>
                      <ul className="flex ml-2">
                        {genres.genres.map((genre) =>
                          e.genre_ids.includes(genre.id) ? (
                            <li
                              key={genre.id}
                              className="text-[#d2d2d2] text-sm font-semibold font-mono backdrop-blur-[1.2px] px-1 py-1 mr-1 mt-1 rounded-md"
                            >
                              {genre.name}
                            </li>
                          ) : null
                        )}
                      </ul>
                      <div className="mt-4 ml-2 flex">
                        <Link href={`/${e.id}#videos`} scroll={true}>
                          <Button
                            className="bg-[#d22f27] hover:bg-[#d23027e6] rounded-xl"
                            variant="destructive"
                          >
                            Watch Trailer
                          </Button>
                        </Link>
                        <Button className="bg-[#898996a8] hover:bg-[#89899682]    rounded-xl ml-2 flex justify-center items-center">
                          <span>+</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
