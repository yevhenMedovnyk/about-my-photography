import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import Preview from '../Preview/Preview';
import { IImage } from '@/types/Image';
import ImagePopup from '../ImagePopup/ImagePopup';
import { useArrow } from '@/hooks/useArrow';

interface IGalleryProps {
	images: IImage[];
}

const Gallery: React.FC<IGalleryProps> = ({ images }) => {
	const [ImagePopupOpen, setImagePopupOpen] = useState(false);
	const [imagePopup, setImagePopup] = useState<IImage>();
	const [indexImg, setIndexImg] = useState<number | null>(null);

	const handleOpenPopup = (index: number | null) => {
		setImagePopupOpen(true);
		setIndexImg(index);
	};

	useEffect(() => {
		if (indexImg !== null) setImagePopup(images[indexImg]);
	}, [indexImg]);

	useArrow({ indexImg, setIndexImg, images });

	console.log(indexImg);

	const handleClosePopup = () => {
		setImagePopupOpen(false);
		setImagePopup({} as IImage);
	};

	return (
		<div className={styles.container}>
			{images.length > 0 &&
				images.map((image, index) => (
					<Preview
						key={image.id}
						image={image}
						index={index}
						variant="gallery"
						handleOpenPopup={handleOpenPopup}
					/>
				))}
			{ImagePopupOpen && imagePopup && (
				<ImagePopup image={imagePopup} handleClosePopup={handleClosePopup} />
			)}
		</div>
	);
};

export default Gallery;
