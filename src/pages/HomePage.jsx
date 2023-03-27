import MainHero from "../components/MainHero"
import Row from '../components/Row';
import { getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "../api/imdb";

function HomePage() {
  return (
    <main>
        <MainHero />
        <Row rowID='1' title='UpComing' fetchFunction={getUpcomingMovies} />
        <Row rowID='2' title='TopRated' fetchFunction={getTopRatedMovies} />
        <Row rowID='3' title='Trending' fetchFunction={getTrendingMovies} />
        {/* <Row title='' fetchFunction={requests.requestTopRated} /> */}
    </main>
  )
}

export default HomePage