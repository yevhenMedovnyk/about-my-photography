import { IImage } from '@/types/Image';
import { useEffect } from 'react';

interface IArrowProps {
	indexImg: number | null;
	setIndexImg: (index: number) => void;
	images: IImage[];
}

export const useArrow: React.FC<IArrowProps> = ({
	indexImg,
	setIndexImg,
	images,
}) => {
	 useEffect(() => {
			const handleArrowKey = (e: KeyboardEvent) => {
				if (indexImg !== null) {
					if (e.key === 'ArrowRight' && indexImg < images.length - 1) {
						setIndexImg(indexImg + 1);
					} else if (e.key === 'ArrowLeft' && indexImg > 0) {
						setIndexImg(indexImg - 1);
					}
				}
			};
			document.addEventListener('keydown', handleArrowKey);
			return () => {
				document.removeEventListener('keydown', handleArrowKey);
			};
	 }, [indexImg]);
	
	return null;
};
