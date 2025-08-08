import "../src/global.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/app/Home";
import MoviesAndShows from "@/app/MoviesAndShows";
import MoviesInfo from "@/app/MoviesInfo";
import ShowInfo from "@/app/ShowInfo";
import Support from "@/app/Support";
import { ModalProvider } from "@/context/useModal";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} index />
          <Route element={<MoviesAndShows />} path="/movies-and-shows" />
          <Route
            element={<MoviesInfo />}
            path="/movies-and-shows/moviesInfo/1"
          />
          <Route element={<ShowInfo />} path="/movies-and-shows/showInfo/1" />
          <Route element={<Support />} path="/support" />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>
);
