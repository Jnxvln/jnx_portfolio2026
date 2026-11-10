import type { JSX } from "solid-js";

// Inline code is matched first so markdown characters inside backticks stay literal.
const INLINE_PATTERN = /`([^`]+)`|\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;

export function renderInlineMarkdown(text: string): JSX.Element[] {
	const nodes: JSX.Element[] = [];
	let lastIndex = 0;
	let match: RegExpExecArray | null;

	while ((match = INLINE_PATTERN.exec(text)) !== null) {
		if (match.index > lastIndex) {
			nodes.push(text.slice(lastIndex, match.index));
		}

		if (match[1] !== undefined) {
			nodes.push(<code>{match[1]}</code>);
		} else if (match[2] !== undefined) {
			nodes.push(<strong>{match[2]}</strong>);
		} else if (match[3] !== undefined) {
			nodes.push(<em>{match[3]}</em>);
		} else if (match[4] !== undefined && match[5] !== undefined) {
			const href = match[5];
			const isInternal = href.startsWith("/");
			nodes.push(
				isInternal ? (
					<a href={href}>{match[4]}</a>
				) : (
					<a href={href} target="_blank" rel="noopener noreferrer">
						{match[4]}
					</a>
				)
			);
		}

		lastIndex = INLINE_PATTERN.lastIndex;
	}

	if (lastIndex < text.length) {
		nodes.push(text.slice(lastIndex));
	}

	return nodes;
}