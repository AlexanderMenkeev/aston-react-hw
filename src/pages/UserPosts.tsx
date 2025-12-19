import { useParams } from 'react-router-dom';
import { useGetPostsQuery } from '../entities/post/api/postsApi';

function UserPosts() {
  const { id } = useParams();

  const { data, isLoading, error } = useGetPostsQuery({ userId: id });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  if (!data) {
    return <div>Posts not found.</div>;
  }

  return (
    <div>
      <h1>UserPosts Page</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default UserPosts;
