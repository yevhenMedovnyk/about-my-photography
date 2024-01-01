import React from 'react';
import styles from './NavLinks.module.scss';
import Link from 'next/link';

interface INavLinks {
	title: string;
	link: string;
}

const navLinksList: INavLinks[] = [
	{
		title: 'Projects',
		link: '/',
	},
	{
		title: 'About',
		link: '/about',
	},
	{
		title: 'Contacts',
		link: '/contacts',
	},
];

const NavLinks = () => {
	return (
		<ul className={styles.navLinks}>
			{navLinksList.map((link) => (
				<li className={styles.link} key={link.link}>
					<Link href={link.link}>{link.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;
