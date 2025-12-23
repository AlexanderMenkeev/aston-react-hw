import type IPost from '../../../entities/post/model/IPost';

export const filterByLength = (posts: IPost[], max: number): IPost[] => {
  if (!posts) return [];

  return posts.filter((post) => {
    return post.title.length <= max;
  });
};
