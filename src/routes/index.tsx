import { Title } from "@solidjs/meta";
import { clientOnly } from "@solidjs/start";
import ViewProjectsBanner from "~/components/ViewProjectsBanner";

export default function Home() {
	const CodeBlock = clientOnly(() => import("~/components/CodeBlock"));

	return (
		<main>
			<Title>Justin Cox</Title>

			{/* Hero */}
			<header class="hero flex flex-col gap-6 w-full bg-linear-to-r from-[#512573] to-[#1C2B53] overflow-hidden">
				<div class="relative">
					<div class="absolute">
						<span class="blur-xs">
							<CodeBlock fallback={<div class="h-80" />} />
						</span>
					</div>
				</div>

				<div class="flex flex-col gap-2 max-w-5xl mx-auto px-8 py-18">
					<h1 class="text-4xl text-center font-bold text-white text-shadow-[1px_2px_0_#000000]">Justin Cox</h1>
					<h3 class="text-2xl text-center text-white opacity-70">@Jnxvln</h3>
				</div>
			</header>

			{/* Introduction */}
			<div class="max-w-5xl mx-auto">
				<article class="flex flex-col gap-4 items-center py-12 px-8 md:flex-row">
					<div class="flex flex-col gap-4 pb-4">
						<p>My name is Justin Cox, and I'm a software developer based in Texas.</p>
						<p>
							I enjoy building interactive websites, dashboards, and even some lower-level work too, like 
							scripting for game engines, tinkering with electronics, and figuring out how software actually drives
							hardware.
						</p>
					</div>

					<div>
						<img src="/images/justin_avatar.jpg" alt="Portrait of Justin" class="w-full h-auto max-w-[200px] md:max-w-sm mx-auto rounded-lg" />
					</div>
				</article>
			</div>

			{/* View Projects Banner */}
			<ViewProjectsBanner />

			{/* Currently Exploring */}
			<div class="bg-[#F1EEFD]">
				<div class="flex flex-col gap-2 p-8 max-w-5xl mx-auto">
					<header class="flex flex-col">
						<h3 class="text-2xl font-bold">Currently Exploring</h3>
						<div class="italic text-sm">Updated: 10/26/2026 @ 3:56pm</div>
					</header>
					<div class="flex flex-col gap-4 md:flex-row">
						{/* Image */}
						<div>
							<img class="w-auto max-w-75" src="/images/esp32_project.png" alt="An ESP32 project" />
						</div>

						{/* Article */}
						<article class="flex flex-col gap-3">
							<p>I have been experimenting in a few game engines, lately including Godot and Unreal Engine. I really like Godot’s ecosystem and scene-based nature, whereas Unreal is much more demanding but helps me keep my C++ skills in check.</p>

							<p>I’ve also been fondly exploring electronics, having started with a few Arduino projects and recently began meddling with the ESP32. It is fun and has a great community around it that make it all the more engaging.</p>
						</article>
					</div>
				</div>
			</div>
		</main>
	);
}