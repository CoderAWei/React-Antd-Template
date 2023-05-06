import { Carousel } from 'antd'
import React from 'react'
import style from '../index.module.less'

const LoginCarousel: React.FC = () => (
	<Carousel>
		<div className={style['carousel-content']}>
			<img className={style['carousel-content-img']} src={require('@/assets/imgs/banner1.png')} alt="BANNER IMAGE" />
			<div className={style['carousel-content-box']}>
				<div>Welcome! Please Login!</div>
			</div>
		</div>

		<div className={style['carousel-content']}>
			<img className={style['carousel-content-img']} src={require('@/assets/imgs/banner2.png')} alt="BANNER IMAGE" />
		</div>
	</Carousel>
)

export default LoginCarousel
