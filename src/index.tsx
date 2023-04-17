import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.less' // antd默认样式
import '@/styles/reset.less'
import '@/styles/antd/antd.less' // 自定义antd的样式
import '@/styles/index.less' // 自定义全局样式
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/hooks/useAuth'
import { Provider } from 'react-redux'
import store from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import '@/locales'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const persistor = persistStore(store)

root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<AuthProvider>
					<App />
				</AuthProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>

	// </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
