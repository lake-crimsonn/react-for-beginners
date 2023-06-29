import PropTypes from "prop-types";

function Movie({ title, cover, rating, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={cover} alt="{title}" />
      <h3>{rating}</h3>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.protoTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
