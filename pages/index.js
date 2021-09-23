import React, { Component } from 'react';

// --------- Components -------------
import Navbar from '../components/navbar/navbar.component';
import SideMenu from '../components/side-menu/side-menu.component';
import Carousel from '../components/carousel/carousel.component';
import MovieList from '../components/movie-list/movie-list.component';

// ---------- data ------------------
import { getMovies } from '../data/movie-data';

const Home = (props) => {
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu />
            </div>

            <div className="col-lg-9">
              <Carousel />
              <div className="row">
                <MovieList movies={props.movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getInitialProps = async () => {
  const movies = await getMovies();

  return {
    movies,
  };
};

// class Home extends Component {
//   static async getInitialProps() {
//     const movies = await getMovies();
//     return {
//       movies,
//     };
//   }

//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     movies: [],
//   //     errorMessage: '',
//   //   };
//   // }

//   // Is called only on Client (Browser)
//   // componentDidMount() {
//   //   getMovies()
//   //     .then((movies) => {
//   //       this.setState({ movies });
//   //     })
//   //     .catch((error) => {
//   //       this.setState({ errorMessage: error });
//   //     });
//   // }

//   render() {
//     const { movies } = this.props;
//     return (
//       <div>
//         <div className="home-page">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-3">
//                 <SideMenu />
//               </div>

//               <div className="col-lg-9">
//                 <Carousel />
//                 <div className="row">
//                   <MovieList movies={movies || []} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//         <style jsx>
//           {`
//             .home-page {
//               padding-top: 80px;
//             }
//           `}
//         </style>
//       </div>
//     );
//   }
// }

// export default Home;
