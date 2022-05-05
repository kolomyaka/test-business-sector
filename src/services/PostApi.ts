import axios from 'axios';

type Post = {
  userId: number
  id: number
  body: string
  title: string
}

export const postApi = {
  async fetchPosts(page: number): Promise<Post[]> {
    const { data } = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    return data;
  }
}