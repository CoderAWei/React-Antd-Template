import { Button, Form, Input } from 'antd'
import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import Header from './Components/Header'
import style from './index.module.less'
import { LoginCarousel } from './Components/Carousel'
import Footer from '@/components/Layout/components/Footer'
// import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import InputEye from '@/components/SuffixIcon/InputEye'

export default function Login() {

	const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false)
	const [loginForm] = Form.useForm()
	const { login } = useAuth()
	const { t } = useTranslation()
	// const { lang } = useSelector((state: any) => state.language)
	const [loading, setLoading] = React.useState<boolean>(false)
	const userId = Form.useWatch('username', loginForm)
	const password = Form.useWatch('password', loginForm)

	// React.useEffect(() => {
	//     console.log(`当前语言是：${lang}`)
	// }, [lang])

	const handleLogin = async () => {
		try {
			setLoading(true)
			await login({
				userId,
				password
			})
			setLoading(false)
		} catch (error) {
			setLoading(false)
		}

	}

	const handleEyeClick = async () => {
		setIsShowPassword(!isShowPassword)
	}

	return (
		<>
			<Header isShowLogout={false}/>
			<div className={style['login']}>
				<div className={`${style['login-banner']}`}>
					<LoginCarousel />
				</div>
				<div className={style['login-content']}>
					<div className={style['login-content-title']}>
						{t('global.login')}
					</div>
					<div className={style['form-container']}>
						<Form
							form={loginForm}
							name="login"
							onFinish={handleLogin}
							autoComplete="off"
							layout="vertical"
							requiredMark={false}
							className='login-form'
						>
							<Form.Item
								label="Username"
								name="username"
								rules={[{ required: true, message: 'Please input your username!' }]}
							>
								<Input placeholder='Username' maxLength={15} />
							</Form.Item>

							<Form.Item
								className={`password-area ${isShowPassword ? 'remove-cypher' : ''}`}
								label="Password"
								name="password"
								rules={[{ required: true, message: 'Please input your password!' }]}
							>
								<Input
									placeholder='Password'
									suffix={<InputEye isShowPassword={isShowPassword}
										handleEyeClick={handleEyeClick}/>}
									type='custom-password-input'
									maxLength={35}
								/>
								{/* <Input.Password placeholder='' suffix={<InputEye isShowPassword={isShowPassword} handleEyeClick={handleEyeClick}/>} /> */}
							</Form.Item>

							<Form.Item>
								<Button type="primary" htmlType="submit" block loading={loading} disabled={!userId || !password}>
                                Submit
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
