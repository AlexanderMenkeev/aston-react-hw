import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: IPost[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Последние посты</h2>
      </div>

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <PostCard post={post} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default PostList;
