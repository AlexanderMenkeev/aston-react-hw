import styles from './PostSection.module.css';
import PostList from '../PostList/PostList';
import { useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { postsSelectors, useGetPostsQuery } from '../../entities/post/api/postsApi';
import { useSelector } from 'react-redux';

const PostSection = () => {
  const [postLength, setPostLength] = useState('20');
  const { isLoading, error } = useGetPostsQuery();

  const allPosts = useSelector(postsSelectors.selectAll);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  const filteredPosts = () => {
    return filterByLength(allPosts, Number(postLength));
  };

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Последние посты</h2>
        <PostLengthFilter postLength={postLength} setPostLength={setPostLength} />
      </div>

      <PostList posts={filteredPosts()} />
    </section>
  );
};

export default PostSection;
