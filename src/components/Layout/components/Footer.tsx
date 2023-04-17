import React from 'react'
import style from  '../index.module.less'

export default function Footer() {
	return (
		<div className={style['layout-right-footer']}>
			<div className={style['layout-right-footer-content']}>
				<div className={style['layout-right-footer-content_img']}>
					<img src={require('@/assets/imgs/logo_white.png')} alt="LOGO" width='127px'/>
				</div>
				<div className={style['layout-right-footer-content_menu']}>
					<div className={style['layout-right-footer-content_menu_item']}>
						<div className={style['title']}>About RPAS</div>
						<a href='https://www.aia.com/en' className={style['link']} target='_blank'>AIA.com</a>
					</div>
					<div className={style['layout-right-footer-content_menu_item']}>
						<div className={style['title']}>About AIA</div>
						<a href='https://www.aia.com/en' className={style['link']} target='_blank'>AIA.com</a>
					</div>
				</div>
			</div>
			<div className={style['layout-right-footer-bottom']}>
				<div>Copyright © 2022, AIA Group Limited and its subsidiaries. All rights reserved. </div>
			</div>
		</div>
	)
}
