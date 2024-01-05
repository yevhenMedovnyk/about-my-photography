'use client';
import React from 'react';
import styles from './page.module.scss';

import useGetImages from '@/hooks/useGetImages';
import Preview from '@/components/Preview/Preview';

const Street = () => {
	const folderPath = 'images/street_photography/kyiv/';
	const imagesUrl = useGetImages(folderPath);

	return (
		<div>
			<h2>Street photography</h2>
			{imagesUrl.length > 0 &&
				imagesUrl.map((image) => (
					<div key={image.id} className={styles.imageContainer}>
						<Preview key={image.id} image={image} />
					</div>
				))}
		</div>
	);
};

export default Street;
