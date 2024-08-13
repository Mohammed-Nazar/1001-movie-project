import React from "react";
import { Input } from "@/components/ui/input";
import SmallCard from "../SmallCrad/SmallCrad";
import { Button } from "@/components/ui/button";

const SearchSide = ({ topRatedMoviesData, popularMoviesData }) => {
  return (
    <aside className="flex flex-col fixed bottom-0 top-0 right-0 pt-10  border-l-[0.1px] border-l-[#898996] w-[25%] pl-7">
      <Input type="text" placeholder="Search" className="w-64 rounded-full" />
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Top Rated Movies</h2>
        <div>
          {topRatedMoviesData.results.slice(0, 3).map((movie, index) => (
            <SmallCard key={index} movie={movie} />
          ))}
        </div>
      </div>
      <Button
        className="bg-[#d22f27] hover:bg-[#d23027e6] rounded-xl mx-2 mt-2 mr-7"
        variant="destructive"
      >
        See More
      </Button>
    </aside>
  );
};

export default SearchSide;
