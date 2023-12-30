import { useState, useContext, useEffect, createContext } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [watched, setWatched] = useState([]);

  return (
    <MovieContext.Provider
      value={{
        watchList,
        watched,
        setWatchList,
        setWatched,
        
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// http://www.omdbapi.com/?s=&apikey=816fc8d9
export default MovieProvider;

export const useMovie = () => {
  return useContext(MovieContext);
};
