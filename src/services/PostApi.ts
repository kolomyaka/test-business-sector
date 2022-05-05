import { AxiosResponse } from 'axios';
import axios from 'axios';
import { Post } from '../store/types/Types';


export const postApi = {
  async fetchPosts(page: number, sortBy: string = 'id', order: string = 'asc'): Promise<AxiosResponse<Post[], Response>> {
    return axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}&_sort=${sortBy}&_order=${order}`)
  }
}