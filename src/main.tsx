import "../src/global.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import Home from "./app/Home";
import MoviesAndShows from "./app/MoviesAndShows";
import MoviesInfo from "@/app/MoviesInfo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/movies&shows",
    Component: MoviesAndShows,
    errorElement: <h1>404</h1>,
  },
  {
    // path: "/moviesInfo/:movieId",
    path: "/moviesInfo/1",
    Component: MoviesInfo,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
