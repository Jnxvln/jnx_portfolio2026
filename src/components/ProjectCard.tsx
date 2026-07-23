import type {ProjectType} from "~/types/project";

type ProjectCardProps = {
	project: ProjectType;
};

export default function ProjectCard(props: ProjectCardProps) {
	return (
		<article
			class="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
			<a
				href={`/projects/${props.project.slug}`}
				title={`View details for ${props.project.name}`}
				class="block overflow-hidden"
			>
				<img
					src={props.project.thumbnail}
					alt=""
					loading="lazy"
					class="aspect-square w-full max-h-56 object-cover transition-transform duration-200 hover:scale-105"
				/>
			</a>

			<div class="flex flex-1 flex-col gap-3 p-4">
				<a href={`/projects/${props.project.slug}`}>
					<h3 class="text-lg font-semibold text-gray-900 hover:underline">
						{props.project.name}
					</h3>
				</a>

				<p class="line-clamp-3 text-sm text-gray-600">
					{props.project.description}
				</p>

				<ul class="flex flex-wrap gap-1.5" aria-label="Tech stack">
					{props.project.stack.map((tech) => (
						<li
							title={tech}
							class="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
						>
							{tech}
						</li>
					))}
				</ul>

				<div class="mt-auto flex gap-4 pt-2 text-sm">
					<a
						href={props.project.repoUrl}
						target="_blank"
						rel="noopener noreferrer"
						title={`View ${props.project.name} source on GitHub`}
						aria-label={`View ${props.project.name} source code on GitHub, opens in a new tab`}
						class="font-bold text-gray-700 hover:text-gray-900 hover:underline"
					>
						Source
					</a>

					{props.project.websiteUrl && (
						<a
							href={props.project.websiteUrl}
							target="_blank"
							rel="noopener noreferrer"
							title={`Visit live site for ${props.project.name}`}
							aria-label={`Visit live site for ${props.project.name}, opens in a new tab`}
							class="font-bold text-gray-700 hover:text-gray-900 hover:underline"
						>
							Live Site
						</a>
					)}
				</div>
			</div>
		</article>
	);
}
