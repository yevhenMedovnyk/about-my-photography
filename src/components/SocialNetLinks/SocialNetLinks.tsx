import React from 'react';
import styles from './SocialNetLinks.module.scss';

import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

interface INetworkLinks {
	icon: JSX.Element;
	link: string;
}

const NetworkLinks: INetworkLinks[] = [
	{
		icon: <FaInstagram />,

		link: 'https://www.instagram.com/med_yevhen/',
	},
	{
		icon: <FaFacebook />,
		link: 'https://www.facebook.com/yevhenmed/',
	},
];
const SocialNetLinks = () => {
	return (
		<div className={styles.container}>
			{NetworkLinks.map((link) => (
				<Link
					className={styles.link}
					key={link.link}
					href={link.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{link.icon}
				</Link>
			))}
		</div>
	);
};

export default SocialNetLinks;
