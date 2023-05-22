import { Button } from 'antd'
import React, { createContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const initValue = { name: 'Justice', sex: 'Male' }
export const myContext = createContext(initValue)

export default function NestedPage() {
	const navigate = useNavigate()

	return (
		<div>
			<Button onClick={() => navigate('/nested/nested1')}>Go to nested1</Button>
			<Button onClick={() => navigate('/nested/nested2')}>Go to nested2</Button>
			<div className="">
				<myContext.Provider value={initValue}>
					<Outlet />
				</myContext.Provider>
			</div>
		</div>
	)
}
