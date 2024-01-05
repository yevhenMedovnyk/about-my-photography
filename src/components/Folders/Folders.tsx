import React from 'react';
import Link from 'next/link';
import styles from './Folders.module.scss';
import Preview from '../Preview/Preview';
import { IFolder } from '@/types/Folder';

interface FolderProps {
	folders: IFolder[];
}

const Folder: React.FC<FolderProps> = ({ folders }) => {
	console.log(folders);

	return (
		<div className={styles.container}>
			{folders.map((folder) => (
				<div key={folder.id} className={styles.folderWrapper}>
					<Link href={folder.link}>
						<Preview key={folder.id} image={folder} />
					</Link>
					<Link className={styles.folderNameLink} href={folder.link}>
						<h2 className={styles.folderName}>{folder.name}</h2>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Folder;
