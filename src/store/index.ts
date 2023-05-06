import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import languageSlice from './features/languageSlice'
import loadingSlice from './features/loadingSlice'

const reducers = combineReducers({
	language: languageSlice,
	loading: loadingSlice
})

const persistConfig = {
	keyPrefix: 'rpas_',
	key: 'storage',
	storage,
	blacklist: [],
	version: 1
}

const persistedReducers = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ // fix issue: A non-serializable value was detected in an action, in the path: `register`.
		serializableCheck: false
	})
})

export default store
