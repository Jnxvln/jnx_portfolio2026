import {createSignal, onMount, onCleanup} from "solid-js";
import {useLocation} from "@solidjs/router";

export default function Navbar() {

	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;
	const [isOpen, setIsOpen] = createSignal(false);
	let navRef: HTMLElement | undefined;

	const linkClass =
		"px-3 py-3 font-bold text-white hover:bg-[#473566] transition duration-150 block sm:inline-block";

	const handleClickOutside = (e: MouseEvent) => {
		if (navRef && !navRef.contains(e.target as Node)) {
			setIsOpen(false);
		}
	};

	onMount(() => {
		document.addEventListener("click", handleClickOutside);
		onCleanup(() => document.removeEventListener("click", handleClickOutside));
	})

	return (
		<nav ref={navRef} class="bg-[#644A85] sticky top-0 z-50">
			<div class="max-w-5xl mx-auto px-0 sm:px-8">
				<div class="flex items-center justify-between">
					<a 
						href="/" 
						class={linkClass} 
						classList={{"bg-[#36284F]": isActive("/")}}
						onClick={() => setIsOpen(false)}
					>
						Home
					</a>

					{/*	Desktop lnks */}
					<div class="hidden sm:flex">
						<a href="/projects" class={linkClass} classList={{"bg-[#36284F]": isActive("/projects")}}>Projects</a>
						<a href="/connect" class={linkClass} classList={{"bg-[#36284F]": isActive("/connect")}}>Connect</a>
					</div>

					{/*	Hamburger toggle, mobile only */}
					<button
						class="px-5 py-3 sm:hidden hover:cursor-pointer"
						onClick={(e) => {
							e.stopPropagation();
							setIsOpen(!isOpen())
						}}
						aria-label="Toggle navigation menu"
						aria-expanded={isOpen()}
					>
						<span class="font-bold text-white">☰</span>
					</button>
				</div>

				{/*	Mobile dropdown */}
				<div class="flex flex-col sm:hidden bg-[#484150]" classList={{hidden: !isOpen()}}>
					<a
						href="/projects"
						class={linkClass}
						classList={{"bg-[#36284F]": isActive("/projects")}}
						onClick={() => setIsOpen(false)}
					>Projects</a>

					<a
						href="/connect"
						class={linkClass}
						classList={{"bg-[#36284F]": isActive("/connect")}}
						onClick={() => setIsOpen(false)}
					>Connect</a>
				</div>
			</div>
		</nav>
	)
}