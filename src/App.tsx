import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Router } from './router'
import { SStorage } from './utils/storage'
import { RouterMapNoAuth } from '@/router/routes'

function App() {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const isLogin = SStorage.getItem('isLogin')
	const { t } = useTranslation()
	const { lang } = useSelector((state: any) => state.language)

	React.useEffect(() => {
		// console.log(`----page ${pathname} enter----`)
		// each page go to top
		window.scrollTo(0, 0)

		// 已登录的页面不能往登录页面跳转
		RouterMapNoAuth.forEach((item) => {
			if (item.path === pathname && isLogin) {
				navigate('homepage')
			}

			if (item.path === pathname && !isLogin) {
				document.title = t(item.title as string)
			}
		})

		return () => {
			// console.log(`----page ${pathname} leave----`)
		}
	}, [pathname, lang])

	return (
		<Router />
	)
}

export default App
