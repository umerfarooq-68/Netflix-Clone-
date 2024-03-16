

// const API_KEY = '8a1f9da7d6789072d1d56aca7d86e78e';

const request = {
fetchNetflixOrignals:'/discover/tv?api_key=8a1f9da7d6789072d1d56aca7d86e78e&width_networks=213',
fetchTrending: '/trending/all/week?api_key=8a1f9da7d6789072d1d56aca7d86e78e&language=en-US',
fetchTopRated:'/movie/top_rated?api_key=8a1f9da7d6789072d1d56aca7d86e78e&language=en-US',
fetchActionMovies:'/discover/movie?api_key=8a1f9da7d6789072d1d56aca7d86e78e&with_genres=28',
fetchComedyMovies:'/discover/movie?api_key=8a1f9da7d6789072d1d56aca7d86e78e&with_genres=35',
fetchHorrormovies:'/discover/movie?api_key=8a1f9da7d6789072d1d56aca7d86e78e&with_genres=27',
fetchRomancemovies:'/discover/movie?api_key=8a1f9da7d6789072d1d56aca7d86e78e&with_genres=10749',
fetchDocumentries:'/discover/movie?api_key=8a1f9da7d6789072d1d56aca7d86e78e&with_genres=99',

};
export default request;
