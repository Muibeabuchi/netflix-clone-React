import axios from "axios";

const key = '324451d518a18c00bfd9aa9e561d1ac4';
// console.log(key);

export const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror:`https://api.themoviedb.org/3/search/movie/?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export async function getPopularMovies(){
    const res =  axios.get(requests.requestPopular);
    return (await res).data;
}


export async function getUpcomingMovies(){
    const res = axios.get(requests.requestUpcoming);
    return  (await res).data;
    // return data;
}
export async function getTopRatedMovies(){
    const res = axios.get(requests.requestTopRated);
    return  (await res).data;
    // return data;
}
export async function getTrendingMovies(){
    const res = axios.get(requests.requestTrending);
    return  (await res).data;
    // return data;
}