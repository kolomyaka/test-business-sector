export type Post = {
  userId: number
  id: number
  body: string
  title: string
}

export type Response = {
  status: number
  statusText: string
}

export type postState = {
  posts: Post[],
  isLoading: boolean,
  response: Response
}
