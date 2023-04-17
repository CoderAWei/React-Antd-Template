import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig  } from 'axios'
import store from '@/store'
import { message } from 'antd'

const $req:AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	timeout: 60000, // 超时时间一分钟
	headers: {
		"Content-Type": "application/json;charset=UTF-8"
	}
})

// 请求拦截 在请求之前做操作
$req.interceptors.request.use((config: InternalAxiosRequestConfig ) => {

	const { lang } = store.getState().language
	// const token = SStorage.getItem('token')

	// config.headers.accessToken = token

	if (config.method === 'post') {
		config.data = Object.assign(config.data || {}, { lang })
	} else if (config.method === 'get') {
		config.params = Object.assign(config.params || {}, { lang })
	}

	return config
}, error => {
	return Promise.reject(error)
})

// 响应拦截 处理返回的数据
$req.interceptors.response.use((response: AxiosResponse ) => {
	const res = response.data

	// handle res.resultCode below

	// for example: when resultCode equals 0(it means request success), return response data

	switch (res.resultCode) {
	case '0':
		return res
	case '402': // 登陆密码/账户名不对
		message.error(res.resultMessage)
		break
	}

}, error => {
	// handle http status error below if needed

	return Promise.reject(error)
})

export default $req