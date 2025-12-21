import type { IPost } from '../../../widgets/PostSection/PostSection';

export const filterByLength = (posts: IPost[], max: number) => {
  if (!posts) return [];

  return posts.filter((post) => {
    return post.title.length <= max;
  });
};
