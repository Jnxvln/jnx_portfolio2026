import { ISODateString } from "~/types/common";
import type { PageBlock } from "~/types/content";

export type ProjectType = {
	slug: string,
	name: string,
	description: string,
	repoUrl: string,
	websiteUrl?: string,
	thumbnail: string,
	stack: string[],
	datePublished: ISODateString,
	images?: { src: string; alt: string }[],
	pageContent?: PageBlock[],
	featured?: boolean
}