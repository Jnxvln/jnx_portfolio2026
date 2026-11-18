export default function InlineLink(props: {
	href: string,
	text: string,
	colored?: boolean,
	external?: boolean
}) {

	const textColor = 'text-blue-700'

	return (
		<a href={props.href} class={`font-bold underline ${props.colored ? textColor : ''}`}
		   target={`${props.external ? '_blank' : '_self'}`} rel="noopener noreferrer">{props.text}</a>
	)
}