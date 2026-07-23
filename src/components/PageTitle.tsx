export default function PageTitle({title, isCentered}: { title: string, isCentered?: boolean }) {
	return (
		<h1 class={`font-bold text-2xl ${isCentered && 'text-center'}`}>{title}</h1>
	);
}
