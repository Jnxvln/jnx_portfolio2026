import { For, Show } from "solid-js";
import { MailPlus } from 'lucide-solid'

export type Social = {
	id: string;
	name: string;
	href: string;
	isEmail?: boolean;
	address?: string;
	username?: string;
	text?: string;
	iconSrc?: string;
};

// To update contact info: change EMAIL_ADDRESS and/or edit the SOCIALS array.
const EMAIL_ADDRESS = "justincox.dev@gmail.com";
export const SOCIALS: Social[] = [
	{
		id: "email",
		name: "Email",
		href: `mailto:${EMAIL_ADDRESS}`,
		address: EMAIL_ADDRESS,
		isEmail: true
	},
	{
		id: "linkedin",
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/justinkcox",
		iconSrc: "/icons/linkedin.png"
	},
	{
		id: "github",
		name: "GitHub",
		href: "https://github.com/Jnxvln?tab=repositories",
		username: "Jnxvln",
		iconSrc: "/icons/github.png"
	},
];

const padding = "px-2 py-3";
const iconSize = 25;
const title = (name: string, username?: string): string => username ? `@${username} on ${name}` : name;
const wrapperClass = "flex flex-col bg-surface-tint transition-colors duration-100 ease-in-out md:flex-row md:items-center md:justify-between md:gap-2";

const EmailButton = ({ social }: { social: Social }) => (
	<a href={social.href} class="w-full md:w-1/4">
		<div class={`bg-email-link text-center ${padding} px-3 hover:bg-email-link-hover hover:transition-all hover:duration-100 hover:ease-in-out md:rounded-br-lg md:rounded-tr-lg`}>
			<div class="flex items-center justify-center gap-2">
				<span>Send Email</span>
				<span><MailPlus /></span>
			</div>
		</div>
	</a>
);

const DisplayAspect = ({ social }: { social: Social }) => (
	<div class={`${padding} flex gap-2 w-full`} title={social.isEmail && social.address ? social.address : title(social.name, social.username)}>
		<Show when={social.iconSrc}>
			<img
				src={social.iconSrc}
				alt=""
				width={iconSize}
				height={iconSize}
			/>
		</Show>
		<div class={social.isEmail ? 'pl-2 flex' : ''}>
			{social.isEmail ? (
				<span>Email: &nbsp; {social.address}</span>
			) : (
				<span>{social.text || social.name}</span>
			)}
		</div>
	</div>
);

const SocialComponent = ({ social }: { social: Social }) => {
	return social.isEmail ? (
		<div class={`${wrapperClass} md:rounded-tl-lg md:rounded-bl-lg`}>
			<DisplayAspect social={social} />
			<EmailButton social={social} />
		</div>
	) : (
		<a href={social.href} target="_blank" rel="noopener noreferrer" class={`${wrapperClass} md:rounded-lg hover:bg-surface-tint-hover`}>
			<DisplayAspect social={social} />
		</a>
	)
};

export default function ContactLinks() {
	return (
		<div class="flex flex-col gap-2">
			<For
				each={SOCIALS}
				fallback={
					<div class={`${padding} rounded-lg bg-neutral-100 text-neutral-500 italic text-[1rem]`}>
						There are currently no socials to display, try again later.
					</div>
				}
			>
				{(social) => <SocialComponent social={social} />}
			</For>
		</div>
	);
}
