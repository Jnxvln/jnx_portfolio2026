import {createMemo, For, Show} from "solid-js";
import type {ProjectType} from "~/types/project";
import ProjectCard from "~/components/ProjectCard";
import allProjects from "~/data/Projects.json";

type ProjectListProps = {
	projects?: ProjectType[];
	selectedTags?: string[];
	sortOrder?: "asc" | "desc";
	onTagClick: (tag: string) => void;
};

export default function ProjectList(props: ProjectListProps) {
	const baseProjects = () => props.projects ?? (allProjects as ProjectType[]);

	const filteredProjects = createMemo(() => {
			const tags = props.selectedTags ?? [];
			const order = props.sortOrder ?? "desc";

			const filtered = tags.length === 0
				? baseProjects()
				: baseProjects().filter((project) => tags.every((tag) => project.stack.some((s) => s.toLowerCase() === tag.toLowerCase())))

			return [...filtered].sort((a, b) => {
				const diff = a.datePublished.localeCompare(b.datePublished);
				return order === "asc" ? diff : -diff;
			});
		}

		// if (tags.length === 0) return baseProjects();

		// return baseProjects().filter((project) =>
		// 	tags.every((tag) =>
		// 		project.stack.some((s) => s.toLowerCase() === tag.toLowerCase())
		// 	)
	);

	return (
		<Show
			when={filteredProjects().length > 0}
			fallback={<p class="text-gray-500">No projects match those tags.</p>}
		>
			<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<For each={filteredProjects()}>
					{(project) => (
						<li>
							<ProjectCard project={project} onTagClick={props.onTagClick}/>
						</li>
					)}
				</For>
			</ul>
		</Show>
	);
}