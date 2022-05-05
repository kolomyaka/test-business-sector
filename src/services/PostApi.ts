import axios from 'axios';
import { Post } from '../store/types/Types';


export const postApi = {
  async fetchPosts(page: number): Promise<Post[]> {
    const { data } = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    return data;
  }
}