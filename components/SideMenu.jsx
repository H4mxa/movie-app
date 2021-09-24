import Model from './Model';
import MovieCreateForm from './MovieCreateForm';

const SideMenu = (props) => {
  const { categories } = props;
  return (
    <div>
      <Model>
        <MovieCreateForm />
      </Model>
      <h1 className="my-4">Categories</h1>
      {categories.map((category) => (
        <div key={category.id} className="list-group">
          <a href="#" className="list-group-item">
            {category.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
