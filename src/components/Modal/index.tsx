import React, { ReactNode } from 'react'
import { Button, Modal, ModalFuncProps } from 'antd'

interface IModalProps extends ModalFuncProps {
	handleModalVisible: (type: number) => void, // 控制弹窗显示状态函数 0 -> 点击遮罩层或右上角叉或取消按钮的回调 | 1 -> 点击确定回调
	open: boolean, // 弹窗显示状态
	children: ReactNode, // 自定义弹窗里的内容
	iconPath?: string, // 需要在内容区域显示的icon
	needFooterBtn?: boolean, // 是否渲染底部按钮
	showCancelBtn?: boolean, // 是否展示cancel按钮
	showOkBtn?: boolean, // 是否展示ok按钮
}

RPASModal.defaultProps = {
	needFooterBtn: true,
	showCancelBtn: true,
	showOkBtn: true,
	cancelText: 'Cancel',
	okText: 'Ok'
}

export default function RPASModal(props: IModalProps) {

	const onClose = (type: number) => {
		props.handleModalVisible(type)
	}

	const CloseIcon = () => {
		return (
			<img src={require('@/assets/icons/icon_close.png')} alt="close" width={'24px'} />
		)
	}

	const FooterButtons = () => {
		return (
			<div className='rpas-modal-footer'>
				{props.showCancelBtn && <Button onClick={() => onClose(0)} {...props.cancelButtonProps}>{props.cancelText}</Button>}
				{props.showOkBtn && <Button type='primary' onClick={() => onClose(1)} {...props.okButtonProps}>{props.okText}</Button>}
			</div>
		)
	}

	return (
		<Modal
			className={`rpas-modal ${props.iconPath ? 'rpas-modal-body-large' : ''}`} // 如果有图标，增大内容区域的上下padding
			open={props.open}
			centered
			onCancel={() => onClose(0)}
			onOk={() => onClose(1)}
			maskClosable={false}
			closeIcon={<CloseIcon />}
			footer={props.needFooterBtn ? <FooterButtons /> : null }
			{...props}
		>
			<div className='rpas-modal-content'>
				{
					props.iconPath &&
					<img className='rpas-modal-content-icon' src={props.iconPath} alt="content-icon" width={'108px'} />
				}
				{
					props.children
				}
			</div>
		</Modal>
	)
}
