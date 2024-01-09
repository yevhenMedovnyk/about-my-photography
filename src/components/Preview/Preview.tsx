import React from 'react';
import { IImage } from '@/types/Image';
import Image from 'next/image';

import styles from './Preview.module.scss';
import clsx from 'clsx';

interface IPreviewProps {
	image: IImage;
	variant?: string;
}

const Preview: React.FC<IPreviewProps> = ({ image, variant }) => {
	const { name, url } = image;
	const gallery = variant === 'gallery';


	return (
		<div className={clsx(styles.container, gallery && styles.gallery)}>
			{url && (
				<Image
					className={styles.image}
					src={url}
					alt={name}
					quality={gallery ? 100 : 80}
					width={!gallery ? 300 : 700}
					height={!gallery ? 300 : 700}
			
				/>
			)}
		</div>
	);
};

export default Preview;
