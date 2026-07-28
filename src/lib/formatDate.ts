export function formatDateMDY(iso: string): string {
	const [year, month, day] = iso.split("-");
	return `${month}/${day}/${year.slice(2)}`;
}