import { useRouter } from 'next/router';

const Movies = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>paramenter url id: {id}</h1>
    </div>
  );
};

export default Movies;
