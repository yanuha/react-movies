import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;
  return (
    <>
      {movies.length ? (
        <div className='movies'>
          {movies.map((movie) => (
            <Movie key={movie.imdbID} {...movie} />
          ))}
        </div>
      ) : (
        <h3>Nothing found</h3>
      )}
    </>
  );
}

export { Movies };
