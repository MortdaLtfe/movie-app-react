import { NavLink } from "react-router-dom";
const Header = () => {
  const Links = [
    { title: "Watch List", classes: "opacity-80", path: "watchlist" },
    { title: "Watched", classes: "opacity-80", path: "watched" },
    { title: "Search", classes: "bg-secondry font-bold", path: "search" }
  ];
  return (
    <header className=" bg-primary ">
      <div className="container flex justify-between items-center py-[10px] mx-auto">
        <p className="text-white text-[24px] font-bold">Logo</p>
        <div className="space-x-[8px]">
          {Links.map(n => (
            <NavLink
              to={n.path}
              className={
                "px-[10px] py-[7px] md:px-[15px] md:py-[8px] rounded-[5px]  text-white " +
                n.classes
              }
            >
              {n.title}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
