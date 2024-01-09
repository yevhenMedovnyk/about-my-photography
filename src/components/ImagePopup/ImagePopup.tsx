import React from 'react';
import styles from './ImagePopup.module.scss';
import Preview from '../Preview/Preview';
import { IImage } from '@/types/Image';

import { IoCloseCircleSharp } from 'react-icons/io5';
import { useEscape } from '@/hooks/useEscape';

interface IImagePopupProps {
	image: IImage;
	handleClosePopup: () => void;
}

const ImagePopup: React.FC<IImagePopupProps> = ({
	image,
	handleClosePopup,
}) => {

	useEscape(handleClosePopup);


	return (
		<div className={styles.background}>
			<div className={styles.contentWrapper}>
				<IoCloseCircleSharp
					onClick={handleClosePopup}
					className={styles.closeIcon}
				/>
				<Preview image={image} variant="popup" />
			</div>
		</div>
	);
};

export default ImagePopup;
