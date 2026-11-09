import {Title} from "@solidjs/meta";
import PageTitle from "~/components/PageTitle";
import ContactLinks from "~/components/ContactLinks";

export default function Contact() {
	return (
		<div>
			<div class="flex flex-col gap-6 max-w-5xl mx-auto">
				<Title>Contact | Justin Cox</Title>
				<div class="my-5">
					<PageTitle title="Contact" isCentered/>
				</div>

				<div class="px-8">
					<div class="flex flex-col gap-6">
						<p>Reach me by email or on any of the socials below.</p>
						<ContactLinks />
					</div>
				</div>
			</div>
		</div>
	);
}
