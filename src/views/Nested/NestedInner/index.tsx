import React from 'react'
import { Outlet } from 'react-router-dom'

export default function NestedInner() {
	return (
		<div style={{ border: '1px solid red' }}>
			NestedInner
			<Outlet />
		</div>
	)
}
