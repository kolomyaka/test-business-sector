import { AxiosResponse } from 'axios';
import axios from 'axios';
import { Post } from '../store/types/Types';


export const postApi = {
  async fetchPosts(sortBy: string = 'id', order: string = 'asc'): Promise<AxiosResponse<Post[], Response>> {
    return axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_sort=${sortBy}&_order=${order}`)
  },
  async fetchAllPosts() {
    return axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/`).then(({ data }) => data)
  }
}