import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false
}

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		toogleLoading(state, { payload }) {
			state.loading = payload
		}
	}
})

export const { toogleLoading } = loadingSlice.actions

export default loadingSlice.reducer
