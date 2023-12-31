import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./pages/PayWall/PayWallPage";
import Layout from "./pages/Layout/Layout";
import LoginForm from "./components/PayWall/LoginComponent/LoginForm";
import SignupForm from "./components/PayWall/LoginComponent/SignupForm";
import ExplorePage from "./pages/Explore/ExplorePage";
import MoviePage from "./pages/Movie/MoviePage";
import HomePage from "./pages/Home/HomePage";
import SectionDetailsPage from "./pages/SectionDetails/SectionDetailsPage";
// import XlCard from "./components/common/card/XlCard";
import Root from "./pages/RootLayout/Root";
import WatchPage from "./pages/Watch/WatchPage";
import XlCardPage from "./pages/Xlcard/XlCardPage";
import SportsPage from "./pages/Sports/Sports";
import Browse from "./components/Sport/Browse";
import View from "./components/Sport/View";
import CheckoutFrom from "./components/PayWall/checkout/CheckoutFrom";
import TVPage from "./pages/Tv/TvPage";
import { loadStripe } from "@stripe/stripe-js";
import PayWallPage from "./pages/PayWall/PayWallPage";
import Protected from "./Routes/Protected";
import MySpacePage from "./pages/MySpace/MySpacePage";
import LogOut from "./components/PayWall/LogOutComponent/LogOut";
import HelpAndSettingPage from "./pages/HelpAndSetting/HelpAndSettingPage";
import MobileForm from "./components/PayWall/LoginComponent/MobileForm";
import CustomStripe from "./components/PayWall/CustomStripe/CustomStripe";

export const stripePromise = loadStripe(
  "pk_test_51Ns2oMSIYrlbiWt1TRjL90tGaivvv8za94oFMVw2bbqWMibsqEwM4zVyk5JqZEdlOESmKcXTD301k90JmrVz8k2b00DVXiGSFO"
);

const AppComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/in/home" />,
    },
    {
      path: "/in",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <SectionDetailsPage />,
              children: [
                {
                  path: "home",
                  element: <HomePage />,
                },
                { path: "sports", element: <SportsPage /> },
                {
                  path: "sports/:sport",
                  element: <View />,
                },
                {
                  path: "movies",
                  element:  <MoviePage />,
                },
                {
                  path: "shows",
                  element: <TVPage />,
                },
              ],
            },

            { path: "explore", element: <ExplorePage /> },
            { path: ":id/view/:search", element: <Browse /> },
            {
              path: ":type/:name/:id",
              element: <XlCardPage />,
            },

            { path: "my-page", element: <MySpacePage /> },
            {
              path: "help",
              element: <HelpAndSettingPage />,
            },
          ],
        },
        {
          path: ":type/:name/:id/watch",
          element: (
            <Protected>
              <WatchPage />
            </Protected>
          ),
        },
        {
          path: "sports/:sportName/:tournament/watch/:sportId",
          element: (
            <Protected>
              <WatchPage />
            </Protected>
          ),
        },
      ],
    },
    {
      path: "/in/paywall",
      element: <PayWallPage />,
      children: [
        { path: "log-in", element: <MobileForm /> },
        { path: "sign-up", element: <SignupForm /> },
        { path: "checkout", element: <CheckoutFrom /> },
        // {path : 'form' , element : <Form />}
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppComponent;
