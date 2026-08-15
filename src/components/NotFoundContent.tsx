import {Title} from "@solidjs/meta";
import {HttpStatusCode} from "@solidjs/start";
import PageTitle from "~/components/PageTitle";
import InlineLink from "~/components/InlineLink";

export default function NotFoundContent({title}: { title?: string }) {
	return (
		<main class="px-8">
			<Title>Not Found</Title>
			<HttpStatusCode code={404}/>
			<div>
				<div class="py-5">
					<PageTitle title={title ?? "Page Not Found"}/>
				</div>
				<div class="flex flex-col gap-2">
					<p>Try using the navigation bar at the top of the page.</p>
					<p><InlineLink href="/" text="Return home" colored/></p>
				</div>
			</div>
		</main>
	);
}
