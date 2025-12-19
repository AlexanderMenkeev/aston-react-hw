import { useParams } from 'react-router-dom';
import { useGetPhotosQuery } from '../entities/photo/api/photosApi';

function AlbumPhotos() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetPhotosQuery(Number(id));

  if (isLoading) {
    return <div>Loading photos...</div>;
  }

  if (error) {
    return <div>Error fetching photos </div>;
  }

  if (!data) {
    return <div>Photos not found.</div>;
  }

  return (
    <div>
      <h1>AlbumPhotos Page</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default AlbumPhotos;
