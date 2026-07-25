import {Title} from "@solidjs/meta";
import PageTitle from "~/components/PageTitle";
import InlineLink from "~/components/InlineLink";

export default function Connect() {
	return (
		<main>
			<div class="flex flex-col gap-6 max-w-5xl mx-auto">
				<Title>Connect | Justin Cox Portfolio</Title>
				<div class="my-5">
					<PageTitle title="Connect" isCentered/>
				</div>

				<div class="px-8">
					<div class="flex flex-col gap-4">
						<p>You can find me on GitHub or contact me via email at: <InlineLink href="mailto:justincox.dev@gmail.com"
						                                                                     text="Justincox.dev@gmail.com"/>
						</p>
						<div class="flex items-center gap-2">
							<img src="/icons/github.png" alt="GitHub Icon" height={32} width={32}/>
							<a href="https://github.com/Jnxvln?tab=repositories" class="font-bold" target="_blank">@Jnxvln on
								GitHub</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
