'use client';
import React from 'react';
import styles from './page.module.scss';

import Folders from '@/components/Folders/Folders';

import glassBridge from '@/assets/images/folderImg/2023.11_Kyiv_00022.jpg';
import streetPh from '@/assets/images/folderImg/2023.12_Kyiv_00037.jpg';
import mac from '@/assets/images/folderImg/2023.12_Kyiv_00017.jpg';
import { IFolder } from '@/types/Folder';

const folders: IFolder[] = [
	{
		id: '1',
		name: 'Kyiv, Ukraine',
		url: glassBridge,
		link: 'street-photography/kyiv-street',
	},
	{
		id: '2',
		name: 'Spain 2020',
		url: streetPh,
		link: '/spain',
	},
	{
		id: '3',
		name: 'Greenland 2022',
		url: mac,
		link: '/greenland',
	},
];

const Street = () => {

	return (
		<div className={styles.container}>
			<Folders folders={folders} />
		</div>
	);
};

export default Street;
