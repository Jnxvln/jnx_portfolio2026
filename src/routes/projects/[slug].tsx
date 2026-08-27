import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { createMemo, For, Show } from "solid-js";
import PageTitle from "~/components/PageTitle";
import InlineLink from "~/components/InlineLink";
import NotFoundContent from "~/components/NotFoundContent";
import { PageBlockRenderer } from "~/components/PageBlockRenderer";
import { formatDateMDY } from "~/lib/formatDate";
import type { ProjectType } from "~/types/project";
import allProjects from "~/data/Projects.json";

export default function ProjectDetail() {
	const params = useParams();

	const project = createMemo(() =>
		(allProjects as unknown as ProjectType[]).find((p) => p.slug === params.slug)
	);

	return (
		<Show when={project()} fallback={<NotFoundContent title="Project Not Found"/>}>
			{(project) => (
				<main>
					<Title>{project().name} | Justin Cox Portfolio</Title>

					<div class="py-5">
						<PageTitle title={project().name} isCentered/>
					</div>

					<div class="flex flex-col gap-6 max-w-5xl mx-auto px-8 pb-12">
						<p><InlineLink href="/projects" text="&larr; Back to projects" colored/></p>

						<img
							src={project().thumbnail}
							alt="Project thumbnail"
							class="w-full max-h-96 rounded-xl object-cover"
						/>

						<div class="text-sm text-gray-600">
							Created {formatDateMDY(project().datePublished)}
						</div>

						<p class="text-gray-700">{project().description}</p>

						<ul class="flex flex-wrap gap-1.5" aria-label="Tech stack">
							<For each={project().stack}>
								{(tech) => (
									<li class="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
										{tech}
									</li>
								)}
							</For>
						</ul>

						<div class="flex gap-4 text-sm">
							<a
								href={project().repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								title={`View ${project().name} source on GitHub`}
								aria-label={`View ${project().name} source code on GitHub, opens in a new tab`}
								class="font-bold text-gray-700 hover:text-gray-900 hover:underline"
							>
								Source
							</a>

							{project().websiteUrl && (
								<a
									href={project().websiteUrl}
									target="_blank"
									rel="noopener noreferrer"
									title={`Visit live site for ${project().name}`}
									aria-label={`Visit live site for ${project().name}, opens in a new tab`}
									class="font-bold text-gray-700 hover:text-gray-900 hover:underline"
								>
									Live Site
								</a>
							)}
						</div>

						<Show
							when={project().pageContent && project().pageContent!.length > 0}
							fallback={
								<Show when={project().images && project().images!.length > 0}>
									<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
										<For each={project().images}>
											{(image) => (
												<img
													src={image.src}
													alt={image.alt}
													loading="lazy"
													class="w-full aspect-square rounded-lg object-cover"
												/>
											)}
										</For>
									</div>
								</Show>
							}
						>
							<div class="flex flex-col">
								<For each={project().pageContent}>
									{(block, i) => <PageBlockRenderer block={block} index={i()} />}
								</For>
							</div>
						</Show>
					</div>
				</main>
			)}
		</Show>
	);
}