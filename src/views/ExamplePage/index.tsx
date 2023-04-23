import { Button, Col, Form, Input, Row, Select, Table } from 'antd'
import React from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import RPASModal from '@/components/Modal'
import type { ColumnsType } from 'antd/es/table'
import SelectArrow from '@/components/SuffixIcon/SelectArrow'
import { toogleLoading } from '@/store/features/loadingSlice'
import { useDispatch } from 'react-redux'
interface DataType {
	key: string
	name: string
	age: number
	address: string
	percentage: string
}

let timer: NodeJS.Timer
let timer2: NodeJS.Timer

export default function PageA() {

	const { t } = useTranslation()
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	const [modalVisible1, setModalVisible1] = React.useState<boolean>(false)
	const [modalVisible2, setModalVisible2] = React.useState<boolean>(false)
	const [modalVisible3, setModalVisible3] = React.useState<boolean>(false)
	const [modalVisible4, setModalVisible4] = React.useState<boolean>(false)
	const [count, setCount] = React.useState(0)

	React.useEffect(() => {
		return () => {
			console.log('清楚Example页面的定时器')
			clearTimeout(timer)
			clearTimeout(timer2)
		}
	}, [])

	const dataSource: DataType[] = [
		{
			key: '1',
			name: '胡彦斌',
			age: 32,
			address: '西湖区湖底公园1号',
			percentage: '80'
		},
		{
			key: '2',
			name: '胡彦祖',
			age: 42,
			address: '西湖区湖底公园1号',
			percentage: '20'
		}
	]

	const columns: ColumnsType<DataType> = [
		{
			title: () => {
				return (
					<span>Name🤡</span>
				)
			},
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: () => {
				return (
					<span>Address⛪</span>
				)
			},
			dataIndex: 'address',
			key: 'address'
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			align: 'right'
		},
		{
			title: 'Percentage',
			dataIndex: 'percentage',
			key: 'percentage',
			render: (value) => {
				return <span>{value}%</span>
			},
			align: 'right'
		}
	]

	const handleModalVisible = (type) => {
		console.log(type)
		setModalVisible1(!modalVisible1)
	}

	const validateInput = (_: any, value: any) => {
		const regNum = /^[0-9]*$/g
		try {
			if (!value) {
				return Promise.reject(new Error('Please input text'))
			} else if (!regNum.test(value)) {
				return Promise.reject(new Error('Only input number!'))
			} else if (value.length <= 6) {
				return Promise.reject(new Error('Text langth must over 6'))
			}
			return Promise.resolve()
		} catch (error) {
			console.log(error)
		}
	}

	const onFinish = (values: any) => {
		// 点击提交按钮或者回车键会进行提交表单的操作，values就是整个表单的值
		console.log(values)
	}

	const handleSetFields = () => {
		form.setFieldsValue({
			initInput: 'cover default value',
			setInput: 'dynamic set field value'
		})
	}

	const handleOpenLoading = () => {
		dispatch(toogleLoading(true))
		timer = setTimeout(() => {
			dispatch(toogleLoading(false))
		}, 3000)
	}

	const handleOpenModal = () => {
		setModalVisible4(true)
		timer2 = setTimeout(() => {
			setModalVisible4(false)
		}, 3000)
	}

	const handleBtnClick = () => {
		// handle 1:
		const nextCount = count + 1
		setCount(nextCount)

		// console.log('count: ' + count)     // 0
		// console.log('nextCount: ' + nextCount) // 1

		// handle 2:
		// setCount(count + 1)

		// handle 3:
		// setCount((prev) => {
		// 	const count = prev + 1
		// 	console.log('count: ' + count)
		// 	return count
		// })
	}

	return (
		<div>
			<h1>按钮示例</h1>
			<Row>
				<Button type='primary' size='small'>{t('global.btn')}</Button>
				<Button type='primary' onClick={handleBtnClick}>点击累加</Button>
				<Button type='primary' size='large'>{t('global.btn')}</Button>
				<Button type='primary' disabled>{t('global.btn')}</Button>
				<Button type="primary" icon={<DownloadOutlined />} />
				<Button type="primary" icon={<DownloadOutlined />} >Download</Button>
			</Row>
			<Row>
				<Button>Secondary Button</Button>
				<Button disabled>Secondary Button</Button>
				<Button icon={<DownloadOutlined />} >Download</Button>
			</Row>
			<Row>
				<Button type='primary' shape='round' size='small'>Secondary Button</Button>
				<Button type='primary' shape='round'>Secondary Button</Button>
				<Button type='primary' shape='round' size='large'>Secondary Button</Button>
				<Button type='primary' shape='round' disabled>Secondary Button</Button>
			</Row>

			<h1>弹窗示例</h1>
			<Row>
				<Button onClick={() => setModalVisible1(true)}>打开弹窗</Button>
				<Button onClick={() => setModalVisible2(true)}>打开警告弹窗</Button>
				<Button onClick={() => setModalVisible3(true)}>打开有表格弹窗</Button>
				<Button onClick={handleOpenModal}>自动关闭的弹窗</Button>
			</Row>

			<h1>表单示例</h1>
			<Row>
				<Col span={6}>
					<Form
						form={form}
						layout='vertical'
						validateTrigger='onChange' // 验证时机 如果要提交的时候验证，可以设置为onSubmit.
						autoComplete='off'
						onFinish={onFinish}
						initialValues={{ initInput: 'rpas' }}
						spellCheck={false} // 去掉红色波浪线
					>
						<Form.Item name={'initInput'} label='默认赋值input'>
							<Input />
						</Form.Item>
						<Form.Item name={'setInput'} label='动态赋值input'>
							<Input />
						</Form.Item>
						<Form.Item
							name={'input'}
							label='Input'
							rules={[
								{ validator: (_, value) => validateInput(_, value) }
							]}>
							<Input placeholder='placeholder here' maxLength={15} />
						</Form.Item>
						<Form.Item name={'select'} label='Select'>
							<Select
								popupClassName='rpas-select-dropdown'
								placeholder='please select'
								suffixIcon={<SelectArrow />}
								options={[
									{
										value: 'jack',
										label: 'Jack'
									},
									{
										value: 'lucy',
										label: 'Lucy'
									},
									{
										value: 'disabled',
										disabled: true,
										label: 'Disabled'
									},
									{
										value: 'Yiminghe',
										label: 'yiminghe'
									}
								]} />
						</Form.Item>
						<Form.Item label='Disable Select'>
							<Select popupClassName='rpas-select-dropdown' disabled placeholder='please select' suffixIcon={<SelectArrow />} />
						</Form.Item>
						<Form.Item>
							<Button onClick={handleSetFields}>给输入框动态赋值</Button>
							<Button type='primary' htmlType="submit">Submit</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>

			<h1>Redux示例</h1>
			<Row>
				<Button onClick={handleOpenLoading}>打开loading</Button>
			</Row>

			<RPASModal
				title='Basic Modal'
				open={modalVisible1}
				handleModalVisible={handleModalVisible}
				okText={'Okkkk'}
				cancelButtonProps={{ disabled: true }}
			>
				<div>Some contents...</div>
				<div>Some contents...</div>
				<div>Some contents...</div>
			</RPASModal>

			<RPASModal
				title=''
				open={modalVisible2}
				handleModalVisible={() => setModalVisible2(!modalVisible2)}
				iconPath={require('@/assets/icons/icon_warning.png')}
				needFooterBtn={false}
			>
				<>
					<div className='title'>End of journey</div>
					<div className='text'>
					this is the end of journey and there is not other side journey and redirection you could further explore.
					</div>
				</>
			</RPASModal>

			<RPASModal
				title='Fund Switching Table'
				width='50%'
				open={modalVisible3}
				handleModalVisible={() => setModalVisible3(!modalVisible3)}
				needFooterBtn={false}
			>
				<Table
					dataSource={dataSource}
					columns={columns}
					pagination={false}
					summary={(pageData) => {
						let total:number = 0
						pageData.forEach(item => {
							total += Number(item.percentage)
						})
						return (
							<Table.Summary fixed>
								<Table.Summary.Row>
									<Table.Summary.Cell index={0} colSpan={3} className='summary-title'>Total</Table.Summary.Cell>
									<Table.Summary.Cell index={1} className='summary-content'>{total}%</Table.Summary.Cell>
								</Table.Summary.Row>
							</Table.Summary>
						)
					}}
				/>
			</RPASModal>

			<RPASModal
				open={modalVisible4}
				handleModalVisible={() => setModalVisible4(!modalVisible4)}
				closable={false}
				needFooterBtn={false}
			>
				<div>该弹窗会在3s后自动关闭</div>
				<div>该弹窗会在3s后自动关闭</div>
				<div>该弹窗会在3s后自动关闭</div>
				<div>该弹窗会在3s后自动关闭</div>
				<div>该弹窗会在3s后自动关闭</div>
				<div>该弹窗会在3s后自动关闭</div>
			</RPASModal>
		</div>
	)
}
