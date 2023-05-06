import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useTranslation } from 'react-i18next'
import React from 'react'
import ExamplePage2 from '@/views/ExamplePage2'

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key) => key
	})
}))

describe('Example page2 testing...', () => {
	const { t } = useTranslation()

	test('render test text dom', () => {
		render(<ExamplePage2 />)
		const text = screen.getByText(/jest & reat-testing-library test case/)
		expect(text).toBeInTheDocument()
	})

	test('Test if change the text after click checkbox', () => {
		render(<ExamplePage2 />)
		const checkbox = screen.getByRole('checkbox')

		// 点击checkbox 期望选中
		act(() => {
			userEvent.click(checkbox)
		})
		expect(checkbox).toBeChecked()

		// 再次点击checkbox 期望未选中
		act(() => {
			userEvent.click(checkbox)
		})
		expect(checkbox).not.toBeChecked()
	})

	test('Test translation text', () => {
		render(<ExamplePage2 />)
		screen.debug()
		const translationText = screen.getByTestId('test')
		expect(translationText).toHaveTextContent(t('test'))
	})
})
