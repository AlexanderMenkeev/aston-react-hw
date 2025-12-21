import { useParams } from 'react-router-dom';
import { postsSelectors, useGetPostsQuery } from '../../entities/post/api/postsApi';
import { useSelector } from 'react-redux';
import PostCard from '../../entities/post/ui/PostCard';
import ItemList from '../../shared/ui/ItemList/ItemList';
import styles from './UserPosts.module.css';
import { useMemo } from 'react';

function UserPosts() {
  const { id } = useParams();

  const { isLoading, error } = useGetPostsQuery();

  const allPosts = useSelector(postsSelectors.selectAll);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      return post.userId == Number(id);
    });
  }, [allPosts, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !id) {
    return <div>Error</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Посты ({filteredPosts.length})</h2>
      </div>
      <ItemList items={filteredPosts} component={PostCard} />;
    </section>
  );
}

export default UserPosts;
