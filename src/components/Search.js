import { useState, useEffect } from "react";
import { useMovie } from "../context/MovieContext.js";
import MovieCard from "./MovieCard.js";
import axios from "axios";
const Search = () => {
  
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=" + searchValue + "&apikey=816fc8d9")
      .then(res => setMovies(res.data.Search));
  }, [searchValue]);
  return (
    <div className="container flex justify-center flex-col md:block mx-auto max-w-[600px] py-[50px]">
      <input
        type="text"
        placeHolder="Movie Name"
        onChange={e => setSearchValue(e.target.value)}
        className=" bg-primary text-white py-[8px] font-medium indent-[8px] rounded-[6px] border-none outline-none md:w-full my-[10px]"
      />
      <div className="flex flex-col justify-start items-start">
        {movies && movies.map(p => <MovieCard movie={p} />)}
      </div>
    </div>
  );
};

export default Search;
