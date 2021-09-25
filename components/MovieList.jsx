import React, { Component } from 'react';
import Link from 'next/link';

class MovieList extends Component {
  // shorten the description of movies list
  shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, 200) + '...';
    }
    return text;
  };

  renderMovies(movies) {
    return movies.map((movie, idx) => (
      <div key={idx} className="col-lg-4 col-md-6 mb-4 ">
        <div className="card h-100 bg-dark text-white">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a>
              <img
                className="card-img-top"
                src={movie.image}
                alt={movie.name}
              />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title ">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a className="title">{movie.name}</a>
              </Link>
            </h4>
            <p className="card-text desc">
              {this.shorten(movie.description, 100)}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.rating}</small>
          </div>
          <style jsx>
            {`
              .title {
                color: #00ff00;
              }
              .desc {
                color: #00ffff;
              }
            `}
          </style>
        </div>
      </div>
    ));
  }
  render() {
    const { movies } = this.props;

    return <React.Fragment>{this.renderMovies(movies)}</React.Fragment>;
  }
}

export default MovieList;
