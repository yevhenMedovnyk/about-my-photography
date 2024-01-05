'use client';
import Preview from '@/components/Preview/Preview';
import { IImage } from '@/types/Image';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './page.module.scss';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase';

interface IImagesState extends IImage {
	file: Blob | Uint8Array | ArrayBuffer;
}

const Upload = () => {
	const [images, setImages] = useState<IImagesState[]>([]);

	const handleSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const files = Array.from(e.target.files as FileList);

		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = (e) => {
				const url = e.target?.result as string;
				const name = file.name;
				const size = file.size;
				const id = uuidv4();

				setImages((prev) => [...prev, { name, url, size, id, file }]);
			};

			reader.readAsDataURL(file);
		});
	};

	const handleUpload = () => {
		images.forEach((image) => {
			const storageRef = ref(storage, 'images/street_photography/kyiv/' + image.name);
			const uploadTask = uploadBytesResumable(storageRef, image.file, {
				customMetadata: {
					id: image.id,
					name: image.name,
				},
			});
			uploadTask.on(
				'state_changed',
				(e) => {
					console.log(e);
				},
				(error) => {
					console.error(error);
				}
			);
		});
	};

	return (
		<div className={styles.container}>
			<input type="file" multiple onChange={handleSelect} />
			<div className={styles.imagesContainer}>
				{images.map((image) => (
					<Preview key={image.id} image={image} />
				))}
			</div>
			<div className={styles.directionContainer}>
				<select className={styles.direction}>
					<option className={styles.option}></option>
					<option className={styles.option}>street_photography</option>
					<option className={styles.option}>Kyiv</option>
					<option className={styles.option}>Lviv</option>
				</select>
				<input className={styles.input} placeholder="enter direction" />
			</div>
			<button onClick={handleUpload} style={{ cursor: 'pointer' }} className={styles.button}>
				Upload
			</button>
		</div>
	);
};

export default Upload;
