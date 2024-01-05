'use client';

import React from 'react';
import styles from './NavLinks.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
		title: 'Street photography',
		link: '/street-photography',
	},
	{
		title: 'About',
		link: '/about',
	},
	{
		title: 'Contacts',
		link: '/contacts',
	}
];

const NavLinks = () => {
	const currentPath = usePathname();

	const isActive = (link: string) =>
		currentPath === link ? styles.active : '';

	return (
		<ul className={styles.navLinks}>
			{navLinksList.map((link) => (
				<li className={clsx(isActive(link.link), styles.link)} key={link.link}>
					<Link href={link.link}>{link.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;
