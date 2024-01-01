import React from 'react';
import SocialNetLinks from '../SocialNetLinks/SocialNetLinks';
import Copyright from '../Copyright/Copyright';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<SocialNetLinks />
			<Copyright />
		</footer>
	);
};

export default Footer;
