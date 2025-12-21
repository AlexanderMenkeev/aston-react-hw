import styles from './PostSection.module.css';
import PostList from '../PostList/PostList';
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import Button from '../../shared/ui/Button/Button';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostListWithLoading = withLoading(PostList);

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postLength, setPostLength] = useState('20');

  const [count, setCount] = useState(0);

  const handleLengthChange = useCallback((newLength: string) => {
    setPostLength(newLength);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    async function getPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    getPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, Number(postLength));
  }, [posts, postLength]);

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Последние посты</h2>
        {/* При изменении стейта родителя, дочерний компонент не ререндерится */}
        <Button onClick={() => setCount((prev) => prev + 1)}>{count}</Button>
        <PostLengthFilter postLength={postLength} setPostLength={handleLengthChange} />
      </div>

      <PostListWithLoading posts={filteredPosts} isLoading={isLoading} />
    </section>
  );
};

export default PostSection;
