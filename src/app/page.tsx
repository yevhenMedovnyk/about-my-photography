'use client';
import styles from './page.module.scss';

import glassBridge from '@/assets/images/folderImg/2023.11_Kyiv_00022.jpg';
import streetPh from '@/assets/images/folderImg/2023.12_Kyiv_00037.jpg';
import mac from '@/assets/images/folderImg/2023.12_Kyiv_00017.jpg';
import Folders from '@/components/Folders/Folders';
import { IFolder } from '@/types/Folder';



const projects: IFolder[] = [
	{
		id: 1,
		name: 'The Glass bridge',
		url: glassBridge,
		link: '/glass-bridge',
	},
	{
		id: 2,
		name: 'Street photography',
		url: streetPh,
		link: '/street-photography',
	},
	{
		id: 3,
		name: 'Street photography',
		url: mac,
		link: '/street-photography',
	},
	{
		id: 4,
		name: 'Street photography',
		url: streetPh,
		link: '/street-photography',
	},
];

export default function Home() {
	return (
		<main className={styles.main}>
				<Folders folders={projects} />
		</main>
	);
}
