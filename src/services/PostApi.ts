import { AxiosResponse } from 'axios';
import axios from 'axios';
import { Post } from '../store/types/Types';


export const postApi = {
  async fetchPosts(page: number): Promise<AxiosResponse<Post[], Response>> {
    return axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
  }
}