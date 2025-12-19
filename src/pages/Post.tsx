import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();

  // const { data, isLoading, error } = usePosts<IAlbum>(`https://jsonplaceholder.typicode.com/posts/${id}`);

  // if (isLoading) {
  //   return <div>Loading post...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching post: {error}</div>;
  // }

  // if (!data) {
  //   return <div>Post not found.</div>;
  // }

  return (
    <div>
      <h1>Post Page</h1>
      {/* <h2>{JSON.stringify(data)}</h2> */}
    </div>
  );
}

export default Post;
