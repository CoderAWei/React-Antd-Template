import React from 'react'

interface IProps {
    isShowPassword: boolean,
    handleEyeClick: (isShowPassword: boolean) => void
}

export default function InputEye(props: IProps) {
	const handleEyeClick = () => {
		// setIsShowPassword(!isShowPassword)
		props.handleEyeClick(!props.isShowPassword)
	}

	return (
		<img style={{ cursor: 'pointer' }} src={!props.isShowPassword ? require('@/assets/icons/icon_eye_close.png') : require('@/assets/icons/icon_eye_open.png')} width="24px" alt="EYE" onClick={handleEyeClick} />
	)
}
