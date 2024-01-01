import React from 'react';
import styles from './Copyright.module.scss';

const Copyright = () => {
	return (
		<div className={styles.container}>
			&copy;Yevhen Medovnyk 2023 - {new Date().getFullYear()}
		</div>
	);
};

export default Copyright;
