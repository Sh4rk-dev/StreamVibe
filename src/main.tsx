import "../src/global.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "@/app/Home";
import MoviesInfo from "@/app/MoviesInfo";
import MoviesAndShows from "@/app/MoviesAndShows";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index />
        <Route path="/moviesInfo/1" element={<MoviesInfo />} />
        <Route path="/movies-and-shows" element={<MoviesAndShows />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
