import { useParams } from 'react-router-dom';
// import { usePosts } from '../features/PostList/model/hooks/usePosts';
// import type { IAlbum } from '../entities/interfaces';

function UserAlbums() {
  const { id } = useParams();

  // const { data, isLoading, error } = usePosts<IAlbum[]>(
  //   `https://jsonplaceholder.typicode.com/users/${id}/albums?_limit=5`,
  // );

  // if (isLoading) {
  //   return <div>Loading albums...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching albums: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Albums not found.</div>;
  // }

  return (
    <div>
      <h1>UserAlbums Page</h1>
      {/* <h2>{JSON.stringify(data)}</h2> */}
    </div>
  );
}

export default UserAlbums;
