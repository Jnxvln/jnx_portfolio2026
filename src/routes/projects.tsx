import {Title} from "@solidjs/meta";
import PageTitle from "~/components/PageTitle";
import ProjectList from "~/components/ProjectList";
import TagFilter from "~/components/TagFilter";
import type {ProjectType} from "~/types/project";
import allProjects from "~/data/Projects.json";
import {createSignal} from "solid-js";
import SortDropdown from "~/components/SortDropdown";

export default function Projects() {

	const projects = allProjects as unknown as ProjectType[];
	const [selectedTags, setSelectedTags] = createSignal<string[]>([]);
	const [sortOrder, setSortOrder] = createSignal<"asc" | "desc">("desc");

	// Unique tags derived straight from the stack field on each project
	const allTags = Array.from(
		new Set(projects.flatMap((p) => p.stack))
	).sort((a, b) => a.localeCompare(b));

	const addTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.some((t) => t.toLowerCase() === tag.toLowerCase()) ? prev : [...prev, tag]
		);
	};

	const removeTag = (tag: string) => {
		setSelectedTags((prev) => prev.filter((t) => t.toLowerCase() !== tag.toLowerCase()));
	};

	const clearTags = () => setSelectedTags([]);

	return (
		<main>
			<Title>Projects | Justin Cox Portfolio</Title>
			<div class="py-5">
				<PageTitle title="Projects" isCentered/>
			</div>

			<div class="sticky top-12 z-40 bg-white px-8 py-5 max-w-5xl">
				<div class="flex items-end gap-3">
					<div class="flex-1">
						<TagFilter
							allTags={allTags}
							selectedTags={selectedTags()}
							onAdd={addTag}
							onRemove={removeTag}
							onClear={clearTags}
						/>
					</div>
					<SortDropdown value={sortOrder()} onChange={setSortOrder}/>
				</div>
			</div>

			<div class="flex flex-col gap-6 max-w-5xl px-8">
				<ProjectList
					projects={projects}
					selectedTags={selectedTags()}
					sortOrder={sortOrder()}
					onTagClick={addTag}
				/>
			</div>
		</main>
	);
}
