'use client';
import styles from './page.module.scss';
import Preview from '@/components/Preview/Preview';

import glassBridge from '@/assets/images/folderImg/2023.11_Kyiv_00022.jpg';
import streetPh from '@/assets/images/folderImg/2023.12_Kyiv_00037.jpg';
import { IImage } from '@/types/Image';

interface IProject extends IImage {}

const projects: IProject[] = [
	{
		id: 1,
		name: 'The Glass bridge',
		url: glassBridge,
	},
	{
		id: 2,
		name: 'Street photography',
		url: streetPh,
	},
];

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				{projects.map((project) => (
					<div key={project.id} className={styles.projectFolder}>
						<Preview key={project.id} image={project} />
						<h2>{project.name}</h2>
					</div>
				))}
			</div>
		</main>
	);
}
