import React, { useState, useEffect } from 'react';
import axios from './aw';
import requests from './requests'; // Changed import name to 'requests'
import './banner.css'
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOrignals); // Changed 'request' to 'requests'
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ]);
        }
        fetchData();
    }, []);

    console.log(movie);

    return (
        <header className='banner' 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, // Corrected 'orignal' to 'original'
            backgroundPosition: "center center",
        }}
        >
            <div className="banner_contents">
                
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{movie?.overview}</h1>
            </div>
            <div className="banner-fadeBottom" />
        </header>
    );
}

export default Banner;
