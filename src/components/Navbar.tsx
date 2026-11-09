import {createSignal, onMount, onCleanup} from "solid-js";
import {useLocation} from "@solidjs/router";

export default function Navbar() {

	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;
	const [isOpen, setIsOpen] = createSignal(false);
	let navRef: HTMLElement | undefined;

	const linkClass =
		"px-3 py-3 font-bold text-white hover:bg-nav-hover transition duration-150 block sm:inline-block";

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
		<nav ref={navRef} class="bg-nav-bg sticky top-0 z-50">
			<div class="max-w-5xl mx-auto px-0 sm:px-8">
				<div class="flex items-center justify-between">
					<a 
						href="/" 
						class={linkClass} 
						classList={{"bg-nav-active": isActive("/")}}
						onClick={() => setIsOpen(false)}
					>
						Home
					</a>

					{/*	Desktop links */}
					<div class="hidden sm:flex">
						<a href="/projects" class={linkClass} classList={{"bg-nav-active": isActive("/projects")}}>Projects</a>
						<a href="/contact" class={linkClass} classList={{"bg-nav-active": isActive("/contact")}}>Contact</a>
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
				<div class="flex flex-col sm:hidden bg-nav-mobile-bg" classList={{hidden: !isOpen()}}>
					<a
						href="/projects"
						class={linkClass}
						classList={{"bg-nav-mobile-active": isActive("/projects")}}
						onClick={() => setIsOpen(false)}
					>Projects</a>

					<a
						href="/contact"
						class={linkClass}
						classList={{"bg-nav-mobile-active": isActive("/contact")}}
						onClick={() => setIsOpen(false)}
					>Contact</a>
				</div>
			</div>
		</nav>
	)
}