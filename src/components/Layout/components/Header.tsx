import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import style from '../index.module.less'
import { useAuth } from '@/hooks/useAuth'
import { toogleLanguage } from '@/store/features/languageSlice'
import Breadcrumb from '@/components/Breadcrumb'

Header.defaultProps = {
	isShowLogout: true
}

export default function Header() {
	const { logout } = useAuth()
	const dispatch = useDispatch()
	const [loading, setLoading] = React.useState<boolean>(false)

	const handleLogout = async () => {
		try {
			setLoading(true)
			await logout()
		} catch (error) {
			setLoading(false)
		}
	}

	return (
		<div className={style['layout-right-header']}>
			<div className={style['layout-right-header_left']}>
				<Breadcrumb />
			</div>
			<div className={style['layout-right-header_right']}>
				<div className={style.username}>username</div>
				<div className={style['language-change']}>
					<div onClick={() => dispatch(toogleLanguage('en'))}>English</div>
					<div onClick={() => dispatch(toogleLanguage('b5'))}>ภาษาไทย</div>
				</div>
				<Button size="small" onClick={handleLogout} loading={loading}>Logout</Button>
			</div>
		</div>
	)
}
