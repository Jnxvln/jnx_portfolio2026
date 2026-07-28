type SortDropdownProps = {
	value: "asc" | "desc";
	onChange: (value: "asc" | "desc") => void;
};

export default function SortDropdown(props: SortDropdownProps) {
	return (
		<div class="relative">

			{/* I had to use `appearance-none` for the input and sort dropdown to match size.*/}
			{/* Since that also stripped the dropdown arrow, I provided a basic SVG one below. */}

			<select
				value={props.value}
				onChange={(e) => props.onChange(e.currentTarget.value as "asc" | "desc")}
				class="appearance-none rounded-lg border px-4 py-2 pr-9"
				aria-label="Sort projects by date"
			>
				<option value="desc">Newest first</option>
				<option value="asc">Oldest first</option>
			</select>

			{/* Used `pointer-events-none` to allow click pass-through to the <select> underneath */}
			<svg
				class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
				viewBox="0 0 20 20"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path d="M6 8l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
	);
}