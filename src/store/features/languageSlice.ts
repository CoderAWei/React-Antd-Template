import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	lang: 'en'
}

const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		toogleLanguage(state, { payload }) {
			state.lang = payload
		}
	}
})

export const { toogleLanguage } = languageSlice.actions

export default languageSlice.reducer
