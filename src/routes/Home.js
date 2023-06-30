import Movie from "../components/Movie";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMoives] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMoives(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>📺 movie app lists 🎥</h1>
      {loading ? (
        <h3>Loading... plz wait</h3>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              cover={movie.medium_cover_image}
              title={movie.title_long}
              rating={movie.rating}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
