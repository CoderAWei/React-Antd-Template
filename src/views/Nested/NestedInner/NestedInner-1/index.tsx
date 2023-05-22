import React, { useContext } from 'react'
import { myContext } from '../..'

export default function NestedInner1() {
	const contextValue = useContext(myContext)

	return (
		<div>
			<span>孙组件1</span>
			<h1>
				name:
				{contextValue.name}
			</h1>
			<h1>
				sex:
				{contextValue.sex}
			</h1>
		</div>
	)
}
