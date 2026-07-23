import {Title} from "@solidjs/meta";
import PageTitle from "~/components/PageTitle";
import InlineLink from "~/components/InlineLink";

export default function Home() {
	return (
		<main>
			<div class="flex flex-col gap-6 max-w-5xl mx-auto">
				<Title>Justin Cox | Portfolio (2026)</Title>

				<div class="py-5">
					<PageTitle title="Portfolio" isCentered/>
				</div>

				<div class="px-8">
					<div class="flex flex-col gap-4">
						<p>My name is Justin Cox, and I'm a software developer based in Texas.</p>
						<p>
							I enjoy building interactive websites and dashboards, and I like getting into lower-level work too;
							scripting for game engines, tinkering with electronics, and figuring out how software actually drives
							hardware.
						</p>
						<p>You can <InlineLink href="/projects" text="browse my projects" colored/> to get an idea of
							things I enjoy making, and feel free to <InlineLink href="/connect" text="contact me" colored/>.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
