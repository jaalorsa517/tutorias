export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpArgs = {
  url: string
  body?: string
}

export interface IHttpServices{
  get(arg: HttpArgs): Promise<any>
}