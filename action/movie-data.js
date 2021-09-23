const MovieData = [
  {
    id: '1',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    longDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rating: 4.7,
    genre: 'action, crime, drama',
    image:
      'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    name: 'Lord of the Rings',
    releaseYear: 2004,
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    longDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    rating: 4.9,
    genre: 'adventure, drama, fantasy',
    image:
      'https://images.unsplash.com/photo-1597515377435-abed237b6bd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '3',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    longDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 4.8,
    genre: 'drama',
    image:
      'https://images.unsplash.com/photo-1555400113-4961f30f68bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MovieData);
      reject('Cannot fetch data!');
    }, 0);
  });
};

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const movieIndex = MovieData.findIndex((movie) => movie.id === id);
    const movie = MovieData[movieIndex];
    setTimeout(() => resolve(movie), 0);
  });
};
