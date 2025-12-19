import { useParams } from 'react-router-dom';
// import { usePosts } from '../features/PostList/model/hooks/usePosts';
// import type { IPhoto } from '../entities/interfaces';

function AlbumPhotos() {
  const { id } = useParams();

  // const { data, isLoading, error } = usePosts<IPhoto[]>(
  //   `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=5`,
  // );

  // if (isLoading) {
  //   return <div>Loading photos...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching photos: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Photos not found.</div>;
  // }

  return (
    <div>
      <h1>AlbumPhotos Page</h1>
      {/* <h2>{JSON.stringify(data)}</h2> */}
    </div>
  );
}

export default AlbumPhotos;
