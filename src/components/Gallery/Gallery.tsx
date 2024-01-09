import React from 'react';
import styles from './Gallery.module.scss';
import Preview from '../Preview/Preview';
import { IImage } from '@/types/Image';

interface IGalleryProps {
	images: IImage[];
}

const Gallery: React.FC<IGalleryProps> = ({ images }) => {
	return (
		<div className={styles.container}>
			{images.length > 0 &&
				images.map((image) => <Preview key={image.id} image={image} variant='gallery' />)}
		</div>
	);
};

export default Gallery;
