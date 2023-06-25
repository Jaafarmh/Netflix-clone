const key='dce344bbcfc2113911ad41932f228cba'

const requests = {  
    requestNowPlaying :`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    requestPopular : `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,

}
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2UzNDRiYmNmYzIxMTM5MTFhZDQxOTMyZjIyOGNiYSIsInN1YiI6IjY0OTViN2QzODgwNTUxMDBlNzQ0ODM5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JKvkT3-FOGzxHJ-AKqdGkjtv8bfmqSQ1jfpPxy7iLSE'
    }
  };

export default requests;

