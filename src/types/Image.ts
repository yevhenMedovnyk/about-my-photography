import { StaticImageData } from "next/image";

export interface IImage  {
	name: string;
	url: string | StaticImageData;
	size?: number;
	id: string | number;
}
