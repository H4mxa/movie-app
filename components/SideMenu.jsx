import Model from './Model';
import MovieCreateForm from './MovieCreateForm';
import { createMovie } from '../action/movie-data';

const SideMenu = (props) => {
  const { categories } = props;

  const handleCreateMovie = (createMovieForm) => {
    createMovie(createMovieForm).then((createMovieForm) => {
      console.log(JSON.stringify(createMovieForm));
    });
  };

  return (
    <div>
      <Model hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Model>
      <h1 className="my-4 text-white">Categories</h1>
      {categories.map((category) => (
        <div key={category.id} className="list-group ">
          <a href="#" className="list-group-item bg-dark text-light">
            {category.name}
          </a>
        </div>
      ))}

      <style jsx>
        {`
          .list-group-item:hover {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default SideMenu;
