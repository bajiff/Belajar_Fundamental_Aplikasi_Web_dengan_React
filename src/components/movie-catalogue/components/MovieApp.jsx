import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navigation } from "./index.js";
import { HomePage, NowPlayingPage, UpcomingPage, SearchPage, DetailPageWrapper } from "./../pages/index.js"


const MovieApp = () => {
  return (
    <>
      <header>
        <h1>Infokan</h1>
        <Navigation/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies/:id" element={<DetailPageWrapper/>} />
        </Routes>
      </main>
    </>
  )
}

export default MovieApp;