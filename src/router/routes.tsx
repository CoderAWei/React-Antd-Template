import RouterBeforeEach from '@/router/routerBeforeEach'
import { IRouterMap } from '@/types'
import { lazy, ReactNode, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const loadElement = (element: ReactNode): ReactNode => {
	return <Suspense fallback={null}> {element} </Suspense>
}

const Homepage = lazy(() => import('@/views/Homepage'))
const Login = lazy(() => import('@/views/Login'))
const PageA = lazy(() => import('@/views/ExamplePage'))
const NestedPage = lazy(() => import('@/views/Nested'))
const NestedPage1 = lazy(() => import('@/views/Nested/Nested1'))
const NestedPage2 = lazy(() => import('@/views/Nested/Nested2'))
const NestedInner = lazy(() => import('@/views/Nested/NestedInner'))
const NestedInner_1 = lazy(() => import('@/views/Nested/NestedInner/NestedInner-1'))
const ErrorPage404 = lazy(() => import('@/views/ErrorPage/404'))
const ExamplePage2 = lazy(() => import('@/views/ExamplePage2'))
const HighCharts = lazy(() => import('@/views/HighCharts'))

export const RouterMapAuth: IRouterMap[] = [
	{
		path: '/',
		auth: 0,
		title: 'Homepage',
		key: 'routerBeforeEach',
		element: loadElement(<RouterBeforeEach />),
		children: [
			{
				path: 'homepage',
				auth: 1,
				title: 'menu.homepage',
				key: 'homepage',
				element: loadElement(<Homepage />),
				parentpath: '/'
			},
			{
				path: 'example',
				auth: 1,
				title: 'menu.example',
				key: 'example',
				element: loadElement(<PageA />),
				parentpath: '/'
			},
			{
				path: 'example2',
				auth: 1,
				title: "menu.example2",
				key: 'example2',
				element: loadElement(<ExamplePage2 />),
				parentpath: '/'
			},
			{
				path: 'high-charts',
				auth: 1,
				title: "menu.highCharts",
				key: 'high-charts',
				element: loadElement(<HighCharts />),
				parentpath: '/'
			},
			{
				path: 'nested',
				auth: 1,
				title: "menu.nested",
				key: 'nested',
				element: <Navigate to='/nested/nested1' replace={true} />,
				parentpath: '/',
				hidden: true
			},
			{
				path: 'nested',
				auth: 1,
				title: "menu.nested",
				key: 'nested',
				element: loadElement(<NestedPage />),
				parentpath: '/',
				children: [
					{
						path: 'nested1',
						auth: 1,
						title: "menu.nested1",
						key: 'nested1',
						element: loadElement(<NestedPage1 />),
						parentpath: '/nested'
					},
					{
						path: 'nested2',
						auth: 1,
						title: "menu.nested2",
						key: 'nested2',
						element: loadElement(<NestedPage2 />),
						parentpath: '/nested'
					},
					{
						path: 'nestedInner',
						auth: 1,
						title: "menu.nestedInner",
						key: 'nestedInner1',
						element: <Navigate to={'/nested/nested1/nestedInner_1'} replace={true} />,
						parentpath: '/nested',
						hidden: true
					},
					{
						path: 'nestedInner',
						auth: 1,
						title: "menu.nestedInner",
						key: 'nestedInner',
						element: loadElement(<NestedInner />),
						parentpath: '/nested',
						children: [
							{
								path: 'nestedInner_1',
								auth: 1,
								title: "menu.nestedInner_1",
								key: 'nestedInner_1',
								element: loadElement(<NestedInner_1 />),
								parentpath: '/nested/nestedInner'
							}
						]
					}
				]
			}
		]
	}
]

export const RouterMapNoAuth: IRouterMap[] = [
	{
		path: '/login',
		auth: 0,
		title: 'menu.login',
		key: 'login',
		element: loadElement(<Login />)
	},
	{
		path: '*',
		auth: 0,
		title: 'menu.404',
		key: '404',
		element: loadElement(<ErrorPage404 />)
	}
]

const RouterMap = [...RouterMapAuth, ...RouterMapNoAuth]

export {
	RouterMap
}