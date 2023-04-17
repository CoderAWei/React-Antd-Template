import ExamplePage2 from '@/views/ExamplePage2'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useTranslation } from 'react-i18next'

jest.mock('react-i18next', () => {
	return {
		useTranslation: () => {
			return {
				t: key => key
			}
		}
	}
})

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