export default function PageTitle(props: { title: string, isCentered?: boolean }) {
	return (
		<h1 class={`font-bold text-2xl ${props.isCentered ? 'text-center' : ''}`}>{props.title}</h1>
	);
}
