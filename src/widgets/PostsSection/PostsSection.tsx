import styles from './PostsSection.module.css';
import { useMemo, useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { postsSelectors, useGetPostsQuery } from '../../entities/post/api/postsApi';
import { useSelector } from 'react-redux';
import ItemList from '../../shared/ui/ItemList/ItemList';
import PostCard from '../../entities/post/ui/PostCard';

const PostsSection = () => {
  const [postLength, setPostLength] = useState('20');
  const { isLoading, error } = useGetPostsQuery();

  const allPosts = useSelector(postsSelectors.selectAll);

  const filteredPosts = useMemo(() => {
    return filterByLength(allPosts, Number(postLength));
  }, [allPosts, postLength]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Последние посты ({filteredPosts.length})</h2>
        <PostLengthFilter postLength={postLength} setPostLength={setPostLength} />
      </div>

      <ItemList items={filteredPosts} component={PostCard} />
    </section>
  );
};

export default PostsSection;
