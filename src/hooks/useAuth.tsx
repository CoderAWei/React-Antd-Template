// import { Login } from '@/api'
import React, {
	ReactNode, createContext, useContext, useMemo
} from 'react'

import { useNavigate } from 'react-router-dom'
import { SStorage } from '@/utils/storage'

interface IAuthContext {
	user: any,
	isLogin: boolean,
	login: (data: any) => void,
	logout: () => void
}

const AuthContext = createContext<IAuthContext>({} as any)

export function AuthProvider({ children }: {children: ReactNode}) {
	const userInfo = SStorage.getItem('userInfo')
	const [user, setUser] = React.useState(userInfo)
	const [isLogin, setIsLogin] = React.useState<boolean>(SStorage.getItem('isLogin'))
	const navigate = useNavigate()

	// 登录
	const login = async (data: any) => new Promise((resolve) => {
		setTimeout(() => { // 模拟接口3s返回结果
			console.log(data)
			setUser(data)
			SStorage.setItem('userInfo', data)
			SStorage.setItem('isLogin', true)
			setIsLogin(true)
			navigate('/homepage')
			resolve({ code: 0, msg: 'Login success' })
		}, 2000)
	})
	// try {
	//     const res = await Login({ ...data, passwordEncrypted: "N", sesstionType: 'W' })
	//     if (res.resultCode === '0') {
	//         setUser(data)
	//         SStorage.setItem('userInfo', data)
	//         SStorage.setItem('isLogin', true)
	//         setIsLogin(true)
	//         navigate("/homepage")
	//     }
	// } catch (error) {
	//     // console.log(error)
	// }

	// 登出
	const logout = (): Promise<object> => new Promise((resolve) => {
		setTimeout(() => {
			setUser(null)
			SStorage.clear()
			SStorage.setItem('isLogin', false)
			setIsLogin(false)
			navigate('/login', { replace: true })
			resolve({ code: 0, msg: 'Logout success' })
		}, 1000)
	})

	const value = useMemo(
		() => ({
			user,
			isLogin,
			login,
			logout
		}),
		[isLogin]
	)

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)

