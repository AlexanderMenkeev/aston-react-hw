import styles from './PostSection.module.css';
import PostList from '../PostList/PostList';
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { useEffect, useState } from 'react';

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

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Последние посты</h2>
      </div>

      <PostListWithLoading posts={posts} isLoading={isLoading} />
    </section>
  );
};

export default PostSection;
