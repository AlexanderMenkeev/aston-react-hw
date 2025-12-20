import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';
import type IPost from '../../entities/post/model/IPost';
import ItemList from '../../shared/ui/ItemList/ItemList';

interface PostListProps {
  posts: IPost[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postsGrid}>
      <ItemList items={posts} component={PostCard} />
    </div>
  );
};

export default PostList;
