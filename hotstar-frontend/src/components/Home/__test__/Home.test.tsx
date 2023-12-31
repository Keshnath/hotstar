import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../Redux/store/Store";
import ToggleCard from "../../common/card/ToggleCard";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import SmallCard from "../../common/card/SmallCard";
const movieData = {
  ageGroup: 12,
  description:
    "test test etstests tets demo deo ajsdf;kjsadf;kjn ;lkndfa ;lkmsda",
  duration: 2222,
  genre: [
    { _id: "64edbe5af0c8c6ef5b906e96", genre: "action", __v: 0 },
  ],
  language: "hindi",
  movie:
    "src/assets/movie/movie/movie-1695980712679-359207551tom.mp4",
  movieLogo:
    "src/assets/movie/movieLogo/movieLogo-1695980713185-6354817271313891.png",
  movieName: "11",
  moviePoster:
    "src/assets/movie/moviePoster/moviePoster-1695980713182-614072666wallpaperflare.com_wallpaper.jpg",
  paid: true,
  releaseYear: "2024",
  trailer:
    "src/assets/movie/trailer/trailer-1695980713013-154196064tom.mp4",
  views: 2555,
  _id: "65169ca95cca90d0a308d1c7",
}

describe("Home Componet Testing", () => {
  test("renders Home component", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Check if the "Star Bharat" text is present
    const starBharatText = screen.getByText("Star Bharat", { exact: false });
    expect(starBharatText).toBeInTheDocument();
  });
  test("renders Home 2", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Check if the "Star Bharat" text is present
    const actionMovies = screen.getByText("Action Movies", { exact: false });
    expect(actionMovies).toBeInTheDocument();
  });
  test("toglle card small card check ", () => {
    render(
      <MemoryRouter>
        <ToggleCard
          movieObj={movieData}
        />
      </MemoryRouter>
    );
    const ele = screen.getByRole("poster");
    expect(ele).toBeInTheDocument();
  });
  test("toglle card medium card Check ", () => {
    render(
      <MemoryRouter>
        <ToggleCard
          movieObj={movieData}
        />
      </MemoryRouter>
    );
    const elementToHover = screen.getByRole("hover");
    fireEvent.mouseEnter(elementToHover);
    const mediumCardElement = screen.getByText("Watch Now");
    expect(mediumCardElement).toBeInTheDocument();
      fireEvent.click(mediumCardElement)
      expect(mediumCardElement).toHaveBeenCalled()
  });



});
