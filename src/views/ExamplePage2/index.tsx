import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ExamplePage2() {

	const [checked, setChecked] = React.useState<boolean>(false)
	const { t } = useTranslation()

	return (
		<div>
			ExamplePage2
			<h1>jest & reat-testing-library test case</h1>
			<br />

			<h1>Test if change the text after click checkbox</h1>
			<Checkbox checked={checked} onChange={(e: CheckboxChangeEvent) => setChecked(e.target.checked)}>{checked ? `checked` : 'no checked'}</Checkbox>
			<br />
			<br />

			<h1>Test useTranslation text</h1>
			<div data-testid='test'>{t('test')}</div>
		</div>
	)
}
