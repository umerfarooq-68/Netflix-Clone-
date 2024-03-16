import React from 'react';
import './App.css';
import Row from './Row'
import requests from "./requests";
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <br />
    <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOrignals} 
    isLargeRow={true} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrormovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomancemovies} />
    <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
   


  </div>
  );
}

export default App;
