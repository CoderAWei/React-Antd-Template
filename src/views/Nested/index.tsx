import { Button } from 'antd'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function NestedPage() {
	const navigate = useNavigate()

	return (
		<div>
			<Button onClick={() => navigate('/nested/nested1')}>Go to nested1</Button>
			<Button onClick={() => navigate('/nested/nested2')}>Go to nested2</Button>
			<div className=''>
				<Outlet />
			</div>
		</div>
	)
}
