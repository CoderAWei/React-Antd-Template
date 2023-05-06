import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import style from '../index.module.less'
import { useAuth } from '@/hooks/useAuth'
import { toogleLanguage } from '@/store/features/languageSlice'

interface IProps {
  isShowLogout: boolean
}

export default function LoginHeader({ isShowLogout }: IProps) {
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
		<div className={style['login-header']}>
			<div className={style['login-header-wrap']}>
				<div className={style['login-header-wrap_logo']}>
					<img src={require('@/assets/imgs/logo.png')} alt="LOGO" width="48px" height="48px" />
				</div>
				<div className={style['login-header-wrap_menu']}>
					<div>AIA</div>
				</div>
				<div className={style['login-header-wrap_right']}>
					<div className={style['language-change']}>
						<div onClick={() => dispatch(toogleLanguage('en'))}>English</div>
						<div onClick={() => dispatch(toogleLanguage('b5'))}>ภาษาไทย</div>
					</div>
					{isShowLogout && <Button onClick={handleLogout} size="small" loading={loading}>Logout</Button>}
					<Button type="primary" size="small">Contact Us</Button>
				</div>
			</div>
		</div>
	)
}
