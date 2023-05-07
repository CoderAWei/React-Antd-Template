import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.less' // antd默认样式
import '@/styles/reset.less'
import '@/styles/antd/antd.less' // 自定义antd的样式
import '@/styles/index.less' // 自定义全局样式
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AuthProvider } from '@/hooks/useAuth'
import store from '@/store'
import '@/locales'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const persistor = persistStore(store)

console.log(`You are running this application in %c${process.env.NODE_ENV} %cmode.`, 'color: green;font-weight: bold;font-size: 16px', 'color: black')

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
