import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar/Navbar';
import AlbumList from './components/Album/AlbumList'
import AlbumForm from './components/Album/AlbumForm'

import SongList from './components/Music/SongList';
import SongForm from './components/Music/SongForm'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <div className="container my-4">
      <Routes>
        <Route path="/" element={ <AlbumList /> } />
        <Route path="/viewSongs/:id" element={ <SongList /> } />
        <Route path="/updateSong/:id" element={ <SongForm /> } />
        <Route path="/addSong" element={ <SongForm /> } />
        <Route path="/addAlbum" element={ <AlbumForm /> } />
        <Route path="/updateAlbum/:id" element={ <AlbumForm /> } />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
