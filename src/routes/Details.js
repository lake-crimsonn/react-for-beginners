import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams(); //const id = useParams()와 다름
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMoive();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading... details of movie</h2>
      ) : (
        <div>
          <h1>{movie.title_long}</h1>

          <img src={movie.medium_cover_image} alt={movie.title} />

          <li>Rating: {movie.rating} stars</li>
          <li>Genres</li>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <li>{movie.description_full}</li>
        </div>
      )}
    </div>
  );
}
export default Details;
