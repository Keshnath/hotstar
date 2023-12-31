import { useEffect, useState } from "react";
import Footer from "../common/Footer/Footer";
import SearchBar from "../common/SearchBar/SearchBar";
import SportsCard from "../common/card/SportsCard";
import { AppDispatch, RootState } from "../../Redux/store/Store";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../Redux/Slices/commonSlice/commonSlice";
import { SEARCH } from "../../services/api";
import React from "react";

const Explore = () => {
  const dispatch: AppDispatch = useDispatch();
  const [search, setSearch] = useState("");
  const allData = useSelector((state: RootState) => state.common.data);

  const handleSearch = (s: string) => {
    setSearch(s);
  };
  useEffect(() => {
    if (search !== "") dispatch(getAll(SEARCH + search));
  }, [search]);
  return (
    <>
      <div className="bg-black pt-8 pl-44 pr-4">
        <SearchBar search={handleSearch} />
        {!search && (
          <div className="text-white font-medium ml-2 text-2xl w-full mt-10">
            Popular Searches
          </div>
        )}
        {search && (
          <div className="mt-10 ">
            {allData[0].map((i) => (
              <SportsCard
                image={i.moviePoster}
                title={i.movieName}
                description={i.description}
                duration={i.duration}
                key={i._id}
              />
            ))}
            {allData[1].map((i) => (
              <SportsCard
                image={i.eventPoster}
                title={i.event}
                description={i.description}
                key={i._id}
              />
            ))}
          </div>
        )}
        <div className="mt-72 ">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Explore;
