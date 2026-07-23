import {For, Show} from "solid-js";
import type {ProjectType} from "~/types/project";
import ProjectCard from "~/components/ProjectCard";
import allProjects from "~/data/Projects.json";

type ProjectListProps = {
	projects?: ProjectType[];
};

export default function ProjectList(props: ProjectListProps) {
	const projects = () => props.projects ?? (allProjects as ProjectType[]);

	return (
		<Show
			when={projects().length > 0}
			fallback={<p class="text-gray-500">No projects to show yet.</p>}
		>
			<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<For each={projects()}>
					{(project) => (
						<li>
							<ProjectCard project={project}/>
						</li>
					)}
				</For>
			</ul>
		</Show>
	);
}