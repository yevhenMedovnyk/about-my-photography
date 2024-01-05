import React from 'react';
import styles from './Logo.module.scss';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href="/" className={styles.logo}>
			Yevhen Medovnyk
		</Link>
	);
};

export default Logo;
