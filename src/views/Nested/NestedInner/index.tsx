import React from 'react'
import { Outlet } from 'react-router-dom'

export default function NestedInner() {
	return (
		<div style={{ border: '1px solid red', marginTop: '100px' }}>
			<Outlet />
		</div>
	)
}
