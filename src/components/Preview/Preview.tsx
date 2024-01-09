import React from 'react';
import { IImage } from '@/types/Image';
import Image from 'next/image';

import styles from './Preview.module.scss';
import clsx from 'clsx';

interface IPreviewProps {
	image: IImage;
	index?: number;
	variant?: string;
	handleOpenPopup?: (index : number | null) => void;
}

const Preview: React.FC<IPreviewProps> = ({
	image,
	index,
	variant,
	handleOpenPopup,
}) => {
	const { name, url } = image;
	const gallery = variant === 'gallery';
	const popup = variant === 'popup';


	

	

	return (
		<div
			onClick={
				handleOpenPopup && gallery
					? () => handleOpenPopup(index !== undefined ? index : null)
					: undefined
			}
			className={clsx(
				styles.container,
				gallery && styles.gallery,
				popup && styles.popup
			)}
		>
			{url && (
				<Image
					className={styles.image}
					src={url}
					alt={name}
					quality={100}
					width={gallery ? 700 : popup ? 1000 : 300}
					height={gallery ? 700 : popup ? 1000 : 300}
					unoptimized={popup ? true : false}
				/>
			)}
		</div>
	);
};

export default Preview;
