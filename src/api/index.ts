import request from '@/request'

// get请求入参要写成params!

export const Login = (data) => request({ url: '/memberController/login', data, method: 'post' })
// export const Login2 = (params) => request({ url: '/memberController/login', params, method: 'GET' })
// export const downloadFile = (data) => request({ url: '/memberController/login', data, method: 'POST', responseType: 'blob' })