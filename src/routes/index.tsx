import {Title} from "@solidjs/meta";

export default function Home() {
	return (
		<main>
			<div class="flex flex-col gap-6 max-w-5xl mx-auto">
				<Title>Justin Cox Portfolio</Title>

				<div class="py-5">
					<h1 class="font-bold text-3xl text-center">Justin Cox</h1>
					<h2 class="text-lg text-center">Full-stack Developer</h2>
					<h3 class="text-lg text-center"><a href="https://github.com/Jnxvln" target="_blank" rel="noopener noreferrer" class="text-neutral-600 underline hover:text-[#490a9c] focus-visible:text-[#490a9c]">@Jnxvln</a></h3>
				</div>

				<div class="px-8 mb-8">
					<article class="flex flex-col gap-4 items-center max-w-3xl mx-auto md:flex-row">
						<div class="flex flex-col gap-4 mb-4">
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

				<div class="px-8 mb-18">
					<article class="flex flex-col gap-4 max-w-3xl mx-auto">
						<header class="flex flex-col">
							<h2 class="text-2xl font-bold">What I'm Working On</h2>
							<time datetime="2026-08-25T09:31" class="text-sm italic">Updated 8/25/2026 @ 9:31am</time>
						</header>
						<p>Here lately I've been updating most of my projects to prepare them for this portfolio.</p>
						<p>
							It's been interesting, many of these projects were started several years ago and it kind of feels like walking into a time capsule. Most of them were just half-baked ideas that I wouldn’t have considered being on a portfolio back then!
						</p>
						<p>
							AI has helped with reinvigorating my work throughout this process. I've been leveraging it to help me plan, design, and hit milestones throughout my projects, and it has been especially useful in helping me bring old codebases up-to-date.
						</p>
						<p>I'll continue working on these projects once the portfolio is finished, plus I have some fresh ideas I'd like to try out.</p>
					</article>
				</div>

				<div class="px-8 mb-18">
					<article class="flex flex-col gap-4 max-w-3xl mx-auto">
						<header class="flex flex-col">
							<h2 class="text-2xl font-bold">Currently Exploring</h2>
							<time datetime="2026-08-25T10:12" class="text-sm italic">Updated 8/25/2026 @ 10:12am</time>
						</header>
						<div class="flex flex-col gap-4 md:flex-row">
							<img src="/images/esp32_project.png" alt="ESP32 project" class="w-62.5 h-auto max-w-full rounded-lg" />
							<div class="flex flex-col gap-4">
								<p>I have been experimenting in a few game engines lately, including Godot and Unreal Engine. I really like Godot’s ecosystem and scene-based nature, whereas Unreal is more demanding but helps me keep my C++ skills in check.</p>
								<p>It has also been fun exploring electronics, I started with a few Arduino projects first and have recently began meddling with the ESP32. It's fun and has a great community around it that make it all the more engaging.</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</main>
	);
}
