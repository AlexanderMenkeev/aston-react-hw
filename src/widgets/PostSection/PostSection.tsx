import styles from './PostSection.module.css';
import PostList from '../PostList/PostList';
import { useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { useGetPostsQuery } from '../../entities/post/api/postsApi';

const PostSection = () => {
  const [postLength, setPostLength] = useState('20');
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  if (!data) {
    return <div>Posts not found.</div>;
  }

  const filteredPosts = () => {
    return filterByLength(data, Number(postLength));
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
