import React from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import Header from './components/Header'
// import Footer from './components/Footer'
import style from './index.module.less'
import RPASMenu from './components/Menu'

export default function Layout() {
	const { loading } = useSelector((state: any) => state.loading)
	return (
		<div className={style.layout}>
			<div className={style['layout-left']}>
				<div className={style['layout-left-brand']}>
					<img src={require('@/assets/imgs/logo_white.png')} alt="LOGO" width="64px" />
					<div>TH RPAS</div>
				</div>
				<div className={style['layout-left-menu']}>
					<RPASMenu />
				</div>
			</div>
			<div className={style['layout-right']}>
				<Header />
				<Spin spinning={loading} style={{ background: 'rgba(0, 0, 0, .4)' }}>
					<div className={style['layout-right-content']}>
						<Outlet />
					</div>
				</Spin>
			</div>
		</div>
	)
}
