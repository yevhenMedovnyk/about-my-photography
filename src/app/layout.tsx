import type { Metadata } from 'next';
import { Cuprum } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './layout.module.scss';

const cuprum = Cuprum({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Yevhen Medovnyk | Photographer',
	description: 'Street and art photography.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cuprum.className}>
				<div className={styles.container}>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
