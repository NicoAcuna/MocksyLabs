import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/core/header'
import Footer from '../components/core/footer'
import { useBreakpoint } from '../util/use-breakpoint'
import Head from 'next/head'
import HeaderDesktop from '../components/core/header-desktop'

function MyApp({ Component, pageProps }: AppProps) {
	const breakpoint = useBreakpoint()

	return (
		<div className='font-axiforma'>
			<Head>
				<title>Mosafe</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>

			{breakpoint === 'DESKTOP' ? <HeaderDesktop /> : <Header />}

			<Component {...pageProps} />

			<Footer />
		</div>
	)
}

export default MyApp
