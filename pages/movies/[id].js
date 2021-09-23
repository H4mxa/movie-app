import { useRouter } from 'next/router';

import { getMovieById } from '../../action/movie-data';

const Movies = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.longDesc}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};

Movies.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return { movie };
};

export default Movies;
