import {createMemo, createSignal, For, Show} from "solid-js";

type TagFilterProps = {
	allTags: string[];
	selectedTags: string[];
	onAdd: (tag: string) => void;
	onRemove: (tag: string) => void;
	onClear: () => void;
};

export default function TagFilter(props: TagFilterProps) {
	const [query, setQuery] = createSignal("");
	const [isOpen, setIsOpen] = createSignal(false);

	const suggestions = createMemo(() => {
		const q = query().trim().toLowerCase();
		const selected = new Set(props.selectedTags.map((t) => t.toLowerCase()));

		return props.allTags
			.filter((tag) => !selected.has(tag.toLowerCase()))
			.filter((tag) => q === "" || tag.toLowerCase().includes(q));
		// .slice(0, 8);
	});

	const addTag = (tag: string) => {
		props.onAdd(tag);
		setQuery("");
		setIsOpen(false);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const exact = props.allTags.find(
				(t) => t.toLowerCase() === query().trim().toLowerCase()
			);
			if (exact) addTag(exact);
			else if (suggestions().length > 0) addTag(suggestions()[0]);
		}
		if (e.key === "Escape") setIsOpen(false);
	};

	return (
		<div class="relative w-full">
			<Show when={props.selectedTags.length > 0}>
				<div class="mb-2 flex flex-wrap items-center gap-1.5">
					<ul class="flex flex-wrap gap-1.5" aria-label="Active tag filters">
						<For each={props.selectedTags}>
							{(tag) => (
								<li>
									<button
										type="button"
										onClick={() => props.onRemove(tag)}
										title={`Remove ${tag} filter`}
										class="flex items-center gap-1 rounded-full bg-gray-900 px-2.5 py-0.5 text-xs font-medium text-white hover:bg-gray-700"
									>
										{tag}
										<span aria-hidden="true">×</span>
									</button>
								</li>
							)}
						</For>
					</ul>

					<button
						type="button"
						onClick={props.onClear}
						class="text-xs font-medium text-gray-500 underline hover:text-gray-900"
					>
						Clear all
					</button>
				</div>
			</Show>

			<input
				type="text"
				name="tag-search"
				placeholder="Filter by tag (e.g. SolidStart, Tailwind)..."
				class="w-full px-4 py-2 border rounded-lg"
				value={query()}
				onInput={(e) => {
					setQuery(e.currentTarget.value);
					setIsOpen(true);
				}}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setTimeout(() => setIsOpen(false), 150)}
				onKeyDown={handleKeyDown}
				role="combobox"
				aria-expanded={isOpen()}
				aria-autocomplete="list"
			/>

			<Show when={isOpen() && suggestions().length > 0}>
				<ul
					class="absolute z-10 mt-1 max-h-72 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
					<For each={suggestions()}>
						{(tag) => (
							<li>
								<button
									type="button"
									// onMouseDown fires before input's onBlur, so the click registers
									onMouseDown={() => addTag(tag)}
									class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
								>
									{tag}
								</button>
							</li>
						)}
					</For>
				</ul>
			</Show>
		</div>
	);
}