import type { EntityState, EntityId } from '@reduxjs/toolkit';
import type IPost from '../../../entities/post/model/IPost';

export const filterByLength = (postsState: EntityState<IPost, EntityId>, max: number): IPost[] => {
  if (!postsState) return [];

  return postsState.ids
    .map((id) => postsState.entities[id])
    .filter((post) => {
      return post.title.length <= max;
    });
};
