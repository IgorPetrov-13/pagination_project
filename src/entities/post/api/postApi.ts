import axiosInstance from '../../../services/axiosInstance';
import type { TypePost, TypePostId, TypePosts } from '../types/postType';

class PostApi {
  static async getPosts(): Promise<TypePosts> {
    try {
      const { data } = await axiosInstance.get<TypePosts>('/posts');
      return data;
    } catch (error) {
      console.error('Ошибка при загрузке постов:', error);
      throw error;
    }
  }

  static async getOnePost(id: TypePostId): Promise<TypePost> {
    const { data } = await axiosInstance.get<TypePost>(`/posts/${id}`);
    return data;
  }

  static async getPaginatedPosts(
    page: number,
    limit: number,
  ): Promise<{ data: TypePosts; total: number }> {
    const res = await axiosInstance.get<TypePosts>('/posts', {
      params: {
        _page: page,
        _limit: limit,
      },
    });

    const total = Number(res.headers['x-total-count']) || 0;

    if (Number.isNaN(total)) {
      throw new Error('Ошибка при получении общего количества постов');
    }

    return {
      data: res.data,
      total,
    };
  }
}

export default PostApi;
