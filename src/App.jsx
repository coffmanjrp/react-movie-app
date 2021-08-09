import { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Search from './components/Search';
import './App.scss';
import loading from './img/loading.svg';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`
    );
    const data = await res.json();

    setData(data.results);
  };

  return (
    <>
      <header>
        <h1>
          <a href="/">Movie App</a>
        </h1>
        <Search setData={setData} />
      </header>
      <main>
        {data.length > 0 ? (
          data.map((movie) => <Movie key={movie.id} movie={movie} />)
        ) : (
          <div>
            <img src={loading} alt="Loading..." />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
