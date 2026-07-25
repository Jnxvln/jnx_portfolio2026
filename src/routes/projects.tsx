import {Title} from "@solidjs/meta";
import PageTitle from "~/components/PageTitle";
import ProjectList from "~/components/ProjectList";
import type {ProjectType} from "~/types/project";
import allProjects from "~/data/Projects.json";

export default function Projects() {

	const projects = allProjects as unknown as ProjectType[];

	return (
		<main>
			<Title>Projects | Justin Cox Portfolio</Title>
			<div class="py-5">
				<PageTitle title="Projects" isCentered/>
			</div>

			<div class="flex flex-col gap-6 max-w-5xl px-8">
				<ProjectList projects={projects}/>
			</div>
		</main>
	);
}
