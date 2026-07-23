export default function InlineLink({href, text, colored, external}: {
	href: string,
	text: string,
	colored?: boolean,
	external?: boolean
}) {

	const textColor = 'text-blue-700'

	return (
		<a href={href} class={`font-bold underline ${colored ? textColor : ''}`}
		   target={`${external ? '_blank' : '_self'}`}>{text}</a>
	)
}