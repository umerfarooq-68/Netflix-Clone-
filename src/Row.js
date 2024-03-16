import React, { useState, useEffect } from 'react';
import axios from './aw';
import './Row.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(fetchUrl);
                console.log('API response:', response.data.results); // Log the API response
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    console.table(movies);

    const handleClick = async (movie) => {
        try {
            const trailer = await movieTrailer(movie?.name || "", { tmdbId: movie.id });
            if (trailer) {
                const urlParams = new URLSearchParams(new URL(trailer).search);
                setTrailerUrl(urlParams.get('v'));
            } else {
                console.log('Trailer not found.');
                setTrailerUrl("");
            }
        } catch (error) {
            console.log('Error fetching trailer:', error);
            setTrailerUrl(""); // Reset trailer URL on error
        }
    };

    return (
        <>
            <div className='row'>
                <h2>{title}</h2>
                <div className='row_posters'>
                    {movies.map(movie => (
                        <img
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                </div>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
        </>
    );
}

export default Row;


