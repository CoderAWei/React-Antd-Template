import React from 'react'
import Layout from '@/components/Layout'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom'
import { RouterMapAuth } from './routes'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { IChildRouterMap } from '@/types'

export default function RouterBeforeEach() {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { isLogin } = useAuth()
	const { t } = useTranslation()
	const { lang } = useSelector((state: any) => state.language)

	const handleRouteTitle = (routerMap: IChildRouterMap[]) => {
		routerMap?.forEach((item: IChildRouterMap) => {
			if (item.path === pathname.slice(pathname.lastIndexOf('/') + 1)) {
				document.title = t(item.title as any)
			}
			if (item.children) handleRouteTitle(item.children)
		})
	}

	React.useEffect(() => {
		handleRouteTitle(RouterMapAuth[0].children?.filter(item => !item.hidden))
		if (!isLogin) {
			navigate('/login')
		} else {
			// not login
			if (pathname === '/') {
				navigate('/homepage')
			}
		}
	}, [pathname, lang])

	return (
		isLogin ? <Layout /> : null
	)
}
