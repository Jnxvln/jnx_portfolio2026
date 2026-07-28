import {createSignal, onCleanup, onMount, Show} from "solid-js";
import {isServer} from "solid-js/web";

export default function BackToTop() {
	const [visible, setVisible] = createSignal(false);

	const handleScroll = () => {
		setVisible(window.scrollY > 400);
	};

	onMount(() => {
		if (isServer) return;
		window.addEventListener("scroll", handleScroll, {passive: true});
	});

	onCleanup(() => {
		if (isServer) return;
		window.removeEventListener("scroll", handleScroll);
	});

	const scrollToTop = () => {
		if (isServer) return;
		window.scrollTo({top: 0, behavior: "smooth"});
	}

	return (
		<Show when={visible()}>
			<button
				type="button"
				onClick={scrollToTop}
				aria-label="Back to Top"
				class="fixed bottom-6 right-6 z-50 rounded-full bg-gray-900 p-3 text-white shadow-lg hover:bg-gray-700 lg:hidden"
			>
				<svg
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M10 15V5M5 10l5-5 5 5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		</Show>
	);
}