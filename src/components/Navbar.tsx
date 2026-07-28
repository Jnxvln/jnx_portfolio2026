import {createSignal} from "solid-js";
import {useLocation} from "@solidjs/router";

export default function Navbar() {

	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;
	const [isOpen, setIsOpen] = createSignal(false);

	const linkClass =
		"px-3 py-3 font-bold hover:bg-[#B2C0D4] transition duration-150 block sm:inline-block";

	return (
		<nav class="bg-slate-300 sticky top-0 z-50">
			<div class="max-w-5xl mx-auto px-0 sm:px-8">
				<div class="flex items-center justify-between">
					<a href="/" class={linkClass} classList={{"bg-slate-400": isActive("/")}}>Home</a>

					{/*	Desktop lnks */}
					<div class="hidden sm:flex">
						<a href="/projects" class={linkClass} classList={{"bg-slate-400": isActive("/projects")}}>Projects</a>
						<a href="/connect" class={linkClass} classList={{"bg-slate-400": isActive("/connect")}}>Connect</a>
					</div>

					{/*	Hamburger toggle, mobile only */}
					<button
						class="px-5 py-3 sm:hidden hover:cursor-pointer"
						onClick={() => setIsOpen(!isOpen())}
						aria-label="Toggle navigation menu"
						aria-expanded={isOpen()}
					>
						<span class="font-bold">☰</span>
					</button>
				</div>

				{/*	Mobile dropdown */}
				<div class="flex flex-col sm:hidden" classList={{hidden: !isOpen()}}>
					<a
						href="/projects"
						class={linkClass}
						classList={{"bg-slate-400": isActive("/projects")}}
						onClick={() => setIsOpen(false)}
					>Projects</a>

					<a
						href="/connect"
						class={linkClass}
						classList={{"bg-slate-400": isActive("/connect")}}
						onClick={() => setIsOpen(false)}
					>Connect</a>
				</div>
			</div>
		</nav>
	)
}