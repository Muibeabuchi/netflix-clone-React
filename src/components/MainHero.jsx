import { useQuery, useQueryClient } from 'react-query';
import {getPopularMovies} from '../api/imdb';

function MainHero() {

  const queryclient = useQueryClient();

  const {data,isLoading ,isError,isSuccess} = useQuery('popular-movies',getPopularMovies);
  const popularmovie = data?.results[Math.floor(Math.random() * data?.results.length)]
  // console.log(data.results,popularmovie);

  const truncatestring = (str,num) =>{
    if(str?.length>num){
      return str.slice(0,num) + '...';
    }else{
      return str;
    }
  }

  // if(isLoading) return <h1>Loading...</h1>
  return (
    <div className='text-white w-full h-[550px] '>
      <div className="h-full w-full ">
        <div className="w-full bg-gradient-to-r from-black absolute h-[550px] "></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${popularmovie?.backdrop_path}`} alt={popularmovie?.name} />
      </div>
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className='text-3xl md:text-5xl font-bold '>{popularmovie?.title}</h1>
        <div className='my-4'>
          <button className="border bg-gray-300 py-2 px-5 border-gray-300 text-black">Play</button>
          <button className="border  py-2 px-5 border-gray-300 text-white ml-4">Watch Later</button>
        </div>
        <p className='text-gray-400 text-sm '>Released: {popularmovie?.release_date}</p>
        <p className='text-gray-300 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncatestring(popularmovie?.overview,150)}</p>
      </div>
    </div>
  )
}

export default MainHero;