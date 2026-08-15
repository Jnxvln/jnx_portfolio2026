import type { JSX } from "solid-js";

const INLINE_PATTERN = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;

export function renderInlineMarkdown(text: string): JSX.Element[] {
	const nodes: JSX.Element[] = [];
	let lastIndex = 0;
	let match: RegExpExecArray | null;

	while ((match = INLINE_PATTERN.exec(text)) !== null) {
		if (match.index > lastIndex) {
			nodes.push(text.slice(lastIndex, match.index));
		}

		if (match[1] !== undefined) {
			nodes.push(<strong>{match[1]}</strong>);
		} else if (match[2] !== undefined) {
			nodes.push(<em>{match[2]}</em>);
		} else if (match[3] !== undefined && match[4] !== undefined) {
			nodes.push(
				<a href={match[4]} target="_blank" rel="noopener noreferrer">
					{match[3]}
				</a>
			);
		}

		lastIndex = INLINE_PATTERN.lastIndex;
	}

	if (lastIndex < text.length) {
		nodes.push(text.slice(lastIndex));
	}

	return nodes;
}