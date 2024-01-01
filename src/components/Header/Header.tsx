import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<NavLinks />
		</header>
	);
};

export default Header;
