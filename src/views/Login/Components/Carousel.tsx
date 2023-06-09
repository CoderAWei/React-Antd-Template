import { Carousel } from 'antd'
import React from 'react'
import style from '../index.module.less'

const LoginCarousel: React.FC = () => (
	<Carousel>
		<div className={style['carousel-content']}>
			<div className={style['carousel-content-img']} style={{ backgroundImage: `url(${require('@/assets/imgs/banner1.png')})` }} />
			<div className={style['carousel-content-box']}>
				<div>Welcome! Please Login!</div>
			</div>
		</div>
		{/*  */}
		<div className={style['carousel-content']}>
			<div className={style['carousel-content-img']} style={{ backgroundImage: `url(${require('@/assets/imgs/banner2.png')})` }} />
		</div>
	</Carousel>
)

export default LoginCarousel
