import React from "react";
import { Input } from "@/components/ui/input";
import SmallCard from "../SmallCrad/SmallCrad";

const SearchSide = ({ topRatedMoviesData, popularMoviesData }) => {
  
  return (
    <aside className="fixed bottom-0 top-0 right-0 pt-10  border-l-[0.1px] border-l-[#898996] w-[25%] pl-10">
      <Input
        type="text"
        placeholder="Search"
        className="w-34 rounded-full"
      />
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Top Rated Movies</h2>
        <div>
          {topRatedMoviesData.results.slice(0, 4).map((movie, index) => (
            <SmallCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SearchSide;
