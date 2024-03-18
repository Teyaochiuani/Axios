import Head from 'next/head';
import { Navbar } from '../ui';

interface LayoutProps {
	children: JSX.Element;
	title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.origin;

const Layout = ({ children, title }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name="author" content="Oscar Galindo" />
				<meta
					name="description"
					content={`Information about pokemon ${title}`}
				/>
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />

				<meta property="og:title" content={`Information about ${title}`} />
				<meta
					property="og:description"
					content={`This page is about ${title}`}
				/>
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0 20px',
				}}
			>
				{children}
			</main>
		</>
	);
};

export default Layout;
