import { useState, useEffect } from "react";

function App() {
  const [movies, setMoives] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    // );
    // // api 데이터를 더 자세하게 보고 어레이를 가져오자.
    // const json = await response.json();

    setMoives(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    // fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     // api 데이터를 더 자세하게 보고 어레이를 가져오자.
    //     setMoives(json.data.movies);
    //     setLoading(false);
    //   });
    getMovies();
  }, []);
  return (
    <div>
      <h1>📺 movie app list 🎥</h1>
      {loading ? (
        <h3>Loading... plz wait</h3>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title_long}</h2>
              <img src={movie.medium_cover_image} />
              <h3>{movie.rating}</h3>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
