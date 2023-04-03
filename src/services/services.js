import axios from "axios"
const apiurl="https://api.themoviedb.org/3"
const apiKey='api_key=bc7af3dff73abcfbabee53a33cd48d10'
// Get popular movies
const getpopularMovies=async()=>{
    const response=await axios.get(`${apiurl}/movie/popular?${apiKey}`)
    return response.data.results
}

// get  upcoming movies
  const upcomingMovies=async()=>{
    const response=await axios.get(`${apiurl}/movie/upcoming?${apiKey}`)
    return response.data.results
  }
//   getpopular tv shows
  const getpopularTvShows=async()=>{
    const response=await axios.get(`${apiurl}/tv/popular?${apiKey}`)
    return response.data.results
  }
  //get specific genere

  const getFamilyMovies=async()=>{
    const response=await axios.get(`${apiurl}/discover/movie?${apiKey}&with_genres=10751`)
    return response.data.results
  }
  const getHorrorMovies=async()=>{
    const response=await axios.get(`${apiurl}/discover/movie?${apiKey}&with_genres=27`)
    return response.data.results
  }
  const getRomanticMovies=async()=>{
    const response=await axios.get(`${apiurl}/discover/movie?${apiKey}&with_genres=10749`)
    return response.data.results
  }
  const getDocumentries=async()=>{
    const response=await axios.get(`${apiurl}/discover/movie?${apiKey}&with_genres=99`)
    return response.data.results
  }

  const getMovieDetails=async(id)=>{
    const response=await axios.get(`${apiurl}/movie/${id}?${apiKey}`)
    return response.data;
  }

  const getTvShowsDetails=async(id)=>{
    const response=await axios.get(`${apiurl}/tv/${id}?${apiKey}`)
    return response.data
  }
  export{ getpopularMovies,upcomingMovies,getpopularTvShows,apiKey,apiurl,getFamilyMovies,getHorrorMovies,getRomanticMovies,getDocumentries,getMovieDetails,getTvShowsDetails};

  
