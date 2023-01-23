// @refresh reload
import { Suspense } from 'solid-js'
import {
	useLocation,
	A,
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
	Link,
} from 'solid-start'
import Sidebar from './components/Sidebar'
import './root.css'
export default function Root() {
	return (
		<Html lang='en'>
			<Head>
				<Title>Example Company - RentUp</Title>
				<Meta charset='utf-8' />
				<Meta name='viewport' content='width=device-width, initial-scale=1' />
				<Link
					href='https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Body class='bg-gray-700'>
				<Suspense>
					<ErrorBoundary>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	)
}
