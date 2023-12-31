import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "../Slices/cardSlice/cardSlice";
import MovieSlice from "../Slices/movieSlice/MovieSlice";
import userRegister from "../Slices/userSlice/userRegister";
import SportSlice from "../Slices/sportsSlice/sportSlice";
import CommonSlice from "../Slices/commonSlice/commonSlice";
import userLogin from "../Slices/userSlice/userLogin";
import carouselSlice from "../Slices/carouselSlice/carouselSlice";
import carouselSyncSlice from "../Slices/carouselSlice/carouselSyncSlice";
import TvSlice from "../Slices/tvSlice/TvSlice";
import checkoutSlice from "../Slices/checkoutSlice/checkoutSlice";
const store = configureStore({
  reducer: {
    isCard: CardSlice,
    movies: MovieSlice,
    user: userRegister,
    sports: SportSlice,
    common: CommonSlice,
    carousel: carouselSlice,
    carouselSync: carouselSyncSlice,
    tv: TvSlice,
    login: userLogin,
    checkout: checkoutSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
