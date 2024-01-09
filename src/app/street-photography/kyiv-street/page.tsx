'use client';
import React from 'react';
import styles from './kyivStreet.module.scss';
import useGetImages from '@/hooks/useGetImages';
import Gallery from '@/components/Gallery/Gallery';

const Kyiv = () => {
	const folderPath = 'images/street_photography/kyiv/';
	const imagesUrl = useGetImages(folderPath);

	return (
		<div className={styles.container}>
			<Gallery images={imagesUrl} />
		</div>
	);
};

export default Kyiv;
