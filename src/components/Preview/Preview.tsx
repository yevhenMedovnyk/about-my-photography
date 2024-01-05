import React from 'react';
import { IImage } from '@/types/Image';
import Image from 'next/image';

import styles from './Preview.module.scss';

interface IPreviewProps {
	image: IImage;
}

const Preview: React.FC<IPreviewProps> = ({ image }) => {
	const { name, url } = image;
	return (
		<div className={styles.container}>
			<Image
				className={styles.image}
				src={url}
				alt={name}
			/>
		</div>
	);
};

export default Preview;
