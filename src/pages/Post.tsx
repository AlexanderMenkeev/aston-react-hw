import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../entities/post/api/postsApi';
import PostCard from '../entities/post/ui/PostCard';

function Post() {
  const { id } = useParams();

  const { data: post, isLoading, error } = useGetPostQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !post) {
    return <div>Error</div>;
  }

  return <PostCard item={post} />;
}

export default Post;
