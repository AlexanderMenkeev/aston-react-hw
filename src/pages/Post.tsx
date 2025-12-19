import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../entities/post/api/postsApi';

function Post() {
  const { id } = useParams();

  const { data: post, isLoading, isSuccess, isError, error } = useGetPostQuery(id);

  let content: React.ReactNode;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = <h2>{JSON.stringify(post)}</h2>;
  } else if (isError) {
    content = <div>Error! {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <h1>Post Page</h1>
      {content}
    </div>
  );
}

export default Post;
