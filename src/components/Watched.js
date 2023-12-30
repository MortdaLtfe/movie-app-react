import React from "react";
import { useMovie } from "../context/MovieContext.js";
import "../App.css";
const WatchList = () => {
  const { watchList, watched, setWatched, setWatchList } = useMovie();
  const handelRemove = movie => {
    const newArray = watched.filter(m => m.imdbID !== movie.imdbID);
    setWatched(newArray);
  };
  const handelAddToWatchList = (movie) => {
    const newArray = watched.filter(m => m.imdbID !== movie.imdbID);
    setWatched(newArray)
    setWatchList([...watchList, movie])
  };
  return (
    <div className="container mx-auto flex flex-col md:grid grid-cols-1 justify-center items-center md:justify-start md:grid-cols-4 gap-x-[30px] gap-y-[35px] my-[20px]">
      {watched &&
        watched.map(movie => (
          <div className="w-[300px] h-[400px] md:w-[250px] md:h-[350px] relative movie-card">
            <img
              src={movie.Poster}
              alt="poster"
              className="h-full w-full img z-0"
            />
            <div className="black-bg absolute w-full h-full left-0 bottom-0 z-2 z-2"></div>
            <div className="flex items-center justify-center space-x-[10px] w-[35px] h-[35px] absolute bottom-5 left-[50%] z-3 translate-x-[-50%] transition-[.4s] optaion hidden">
              <img
                src="icons/NotVisibility.svg"
                className="w-full h-full"
                alt="watched"
                onClick={() => handelAddToWatchList(movie)}
              />
              <img
                src="icons/close.svg"
                className="w-full h-full"
                alt="close"
                onClick={() => handelRemove(movie)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
// http://www.omdbapi.com/?s=Batman&apikey=816fc8d9
//
// apikey=816fc8d9
export default WatchList;
