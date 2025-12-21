import { useParams } from 'react-router-dom';
import { postsSelectors, useGetPostsQuery } from '../entities/post/api/postsApi';
import { useSelector } from 'react-redux';
import PostCard from '../entities/post/ui/PostCard';
import ItemList from '../shared/ui/ItemList/ItemList';
import type IPost from '../entities/post/model/IPost';

function UserPosts() {
  const { id } = useParams();

  const { isLoading, error } = useGetPostsQuery();

  const allPosts = useSelector(postsSelectors.selectAll);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !id) {
    return <div>Error</div>;
  }

  function filterPostsByUserId(posts: IPost[], id: number) {
    return posts.filter((post) => {
      return post.userId == id;
    });
  }

  return <ItemList items={filterPostsByUserId(allPosts, Number(id))} component={PostCard} />;
}

export default UserPosts;
