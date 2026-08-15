import { query } from "@solidjs/router";
import projectsData from "~/data/Projects.json";
import type { ProjectType } from "~/types/project";

export const getProjects = query(async() => {
	"use server";
	return projectsData as ProjectType[];
}, "projects");

export const getProjectBySlug = query(async (slug: string) => {
	"use server";
	const project = (projectsData as ProjectType[]).find((p) => p.slug === slug);
	if (!project) {
		throw new Response(null, { status: 404, statusText: "Not Found" });
	}
	return project;
}, "project-by-slug");