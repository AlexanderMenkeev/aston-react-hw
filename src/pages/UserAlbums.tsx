import { useParams } from 'react-router-dom';
import { useGetAlbumsQuery } from '../entities/album/api/albumsApi';
import ItemList from '../shared/ui/ItemList/ItemList';
import AlbumCard from '../entities/album/ui/AlbumCard';
// import { usePosts } from '../features/PostList/model/hooks/usePosts';
// import type { IAlbum } from '../entities/interfaces';

function UserAlbums() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetAlbumsQuery(Number(id));

  if (isLoading) {
    return <div>Loading albums...</div>;
  }

  if (error) {
    return <div>Error fetching albums</div>;
  }

  if (!data) {
    return <div>Albums not found.</div>;
  }

  return <ItemList items={data} component={AlbumCard} />;
}

export default UserAlbums;
