import { useMovie } from "../context/MovieContext.js";
const MovieCard = ({ movie }) => {
  const { setWatchList, setWatched, watchList, watched } = useMovie();

  const disableWatchList = watchList.find(o => o.imdbID === movie.imdbID);
  const disableWatched = watched.find(o => o.imdbID === movie.imdbID);
  const handelAddToWatchList = m => {
    if (!disableWatchList) {
      setWatchList([...watchList, m]);
    }
  };
  const handelAddToWatched = m => {
    if (!disableWatched) {
      setWatched([...watched, m]);
    } else if (!disableWatchList){
      setWatchList([...watchList, m]);
    }
  };
  return (
    <div className="flex my-[10px] space-x-[10px]">
      {
        // Poster Wrapper
        movie.Poster ? (
          <img
            src={movie.Poster}
            alt="img"
            className="img-wrapper w-[75px] h-[125px] rounded-[5px]"
          />
        ) : (
          <div className="img-wrapper w-[75px] h-[125px] bg-blue-100"> </div>
        )
      }

      <div className="flex flex-col py-[5px]">
        <p className="font-[700]">{movie.Title}</p>
        <span className="opacity-70">{movie.Year ? movie.Year : "-"}</span>

        <span className="opacity-70">{movie.Type ? movie.Type : "-"}</span>

        <div className="space-x-[10px] mt-[15px]">
          <button
            className={
              disableWatchList
                ? "bg-secondry py-[2px] px-[7px] rounded-[3px] text-[16px] font-bold text-white opacity-60 transition-[.3s]"
                : "bg-secondry py-[2px] px-[7px] rounded-[3px] text-[16px] font-bold text-white hover:opacity-80 transition-[.3s]"
            }
            onClick={() => handelAddToWatchList(movie)}
          >
            Add to Watch List
          </button>
          <button
            className={
              disableWatched
                ? "bg-secondry py-[2px] px-[7px] rounded-[3px] text-[16px] font-bold text-white opacity-60 transition-[.3s]"
                : "bg-secondry py-[2px] px-[7px] rounded-[3px] text-[16px] font-bold text-white hover:opacity-80 transition-[.3s]"
            }
            onClick={() => handelAddToWatched(movie)}
          >
            Add to Watchched
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
