import { useParams } from 'react-router-dom';
// import { usePosts } from '../features/PostList/model/hooks/usePosts';
// import type { IPost } from '../entities/interfaces';

function UserPosts() {
  const { id } = useParams();

  // const { data, isLoading, error } = usePosts<IPost[]>(
  //   `https://jsonplaceholder.typicode.com/users/${id}/posts?_limit=5`,
  // );

  // if (isLoading) {
  //   return <div>Loading posts...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching posts: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Posts not found.</div>;
  // }

  return (
    <div>
      <h1>UserPosts Page</h1>
      {/* <h2>{JSON.stringify(data)}</h2> */}
    </div>
  );
}

export default UserPosts;
