import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { RouterMapAuth } from '@/router/routes'
import { useLocation, useNavigate } from 'react-router-dom'
import { SStorage } from '@/utils/storage'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { IChildRouterMap } from '@/types'

export default function RPASMenu() {

	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [selectedKeys, setSelectedKeys] = useState<string>('')
	const [openKeys, setOpenKeys] = useState<Array<string>>([])
	const [menuList, setMenuList] = useState<IChildRouterMap[]>([])
	const { t } = useTranslation()
	const { lang } = useSelector((state: any) => state.language)

	React.useEffect(() => {
		// 菜单文字的处理
		const items = RouterMapAuth[0].children?.filter(item => !item.hidden)
		handleMenuLabel(items as IChildRouterMap[])
	}, [lang])

	React.useEffect(() => {
		// 从当前url里取出路径 回显对应的菜单
		SStorage.setItem('selectedKeys', pathname.slice(pathname.lastIndexOf('/') + 1))

		// 当多级菜单时 还需设置openKey 回显默认展开的嵌套菜单
		if (pathname.lastIndexOf('/') !== 0) {
			SStorage.setItem('openKeys', pathname.match(/(?<=\/).*?(?=\/)/g))
		}

		// 回显默认选中的菜单和展开的嵌套菜单
		SStorage.getItem('selectedKeys') ? setSelectedKeys(SStorage.getItem('selectedKeys')) : setSelectedKeys('homepage')
		setOpenKeys(SStorage.getItem('openKeys'))
	}, [pathname])

	const handleMenuLabel = (menuItem: IChildRouterMap[]) => {
		let list: IChildRouterMap[] = []
		menuItem?.forEach((item: any) => {
			item.label = t(item.title)
			list.push(item)
			if (item.children) handleMenuLabel(item.children)
		})
		setMenuList(list)
	}

	const handleMenuClick: MenuProps['onClick'] = ({ item, key, keyPath }: any) => {
		// 存储key到本地 刷新页面选择的菜单也不会丢失
		SStorage.setItem('selectedKeys', key)

		if (keyPath.length > 1) {
			// 点击多级菜单时 存储被点击的root menu key, 用来回显
			SStorage.setItem('openKeys', [keyPath[keyPath.length - 1]])
		} else {
			// 当点击一级菜单时，清空curNestedKey，这样刷新的时候就不会展开没有被选中的二级菜单
			SStorage.setItem('openKeys', [])
		}

		if (item.props.parentpath === '/') {
			navigate(item.props.path)
		} else {
			navigate(`${item.props.parentpath}/${item.props.path}`)
		}
	}

	const handleOpenChange: MenuProps['onOpenChange'] = (openKeys: string[]) => {
		setOpenKeys(openKeys)
	}

	return (
		<Menu
			items={menuList}
			mode="inline"
			selectedKeys={[selectedKeys]}
			openKeys={openKeys}
			onClick={handleMenuClick}
			onOpenChange={handleOpenChange}
		/>
	)
}
