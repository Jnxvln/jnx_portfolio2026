import { Switch, Match, For } from "solid-js";
import { renderInlineMarkdown } from "~/lib/inlineMarkdown";
import type { PageBlock } from "~/types/content";

function layoutClass(block: PageBlock, index: number): string {
	const flipped = index % 2 === 1;
	const count = block.images?.length ?? 0;

	if (count === 0) return "block-text-only";
	if (count === 1) return flipped ? "block-image-left" : "block-image-right";
	return flipped ? "block-stagger-flipped" : "block-stagger";
}

export function PageBlockRenderer(props: { block: PageBlock; index: number }) {
	return (
		<Switch>
			<Match when={props.block.type === "paragraph"}>
				<div class={`page-block ${layoutClass(props.block, props.index)}`}>
					<div class="page-block__text">
						<p>{renderInlineMarkdown(props.block.text)}</p>
					</div>
					<For each={props.block.images}>
						{(img) => <img src={img.src} alt={img.alt} />}
					</For>
				</div>
			</Match>
		</Switch>
	);
}