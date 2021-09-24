import React from 'react';

const SideMenu = (props) => {
  const { categories } = props;
  return (
    <div>
      <h1 className="my-4">Categories</h1>
      {categories.map((category, idx) => (
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
