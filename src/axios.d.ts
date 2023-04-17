// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    request<T = any> (config: AxiosRequestConfig): Promise<T>;
  }
}