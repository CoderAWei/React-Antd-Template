import Footer from '@/components/Layout/components/Footer'
import { useAuth } from '@/hooks/useAuth'
import Header from '@/views/Login/Components/Header'
import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.less'

export default function ErrorPage() {
	const navigate = useNavigate()
	const { isLogin } = useAuth()
	return (
		<div className={style['error-page']}>
			<Header />
			<div className={style['error-page-content']}>
				<h1>404 Not Found</h1>
				<Button
					type='primary'
					onClick={() => navigate(`${isLogin ? '/homepage' : '/login'}`, { replace: true })}
				>
					{isLogin ? 'Back to homepage' : 'Back to login'}
				</Button>
			</div>
			<Footer/>
		</div>
	)
}
