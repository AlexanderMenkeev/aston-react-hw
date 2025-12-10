import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';
import type { IPost } from '../PostSection/PostSection';

interface PostListProps {
  posts: IPost[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postsGrid}>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard post={post} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostList;
