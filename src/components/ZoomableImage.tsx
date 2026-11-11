import { createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";

type ZoomableImageProps = {
	src: string;
	alt: string;
	/** Classes for the inline (small) image */
	class?: string;
	/** Classes for the button wrapping the inline image */
	buttonClass?: string;
	loading?: "lazy" | "eager";
};

/**
 * An image that opens at full size in a native <dialog> when clicked.
 * Closes via the Close button, Escape (native), or a click on the backdrop.
 * The dialog is portaled to <body> so it never becomes a layout item of the parent.
 */
export default function ZoomableImage(props: ZoomableImageProps) {
	let dialogRef: HTMLDialogElement | undefined;
	const [open, setOpen] = createSignal(false);

	const show = () => {
		setOpen(true);
		dialogRef?.showModal();
	};
	const close = () => dialogRef?.close();

	return (
		<>
			<button
				type="button"
				onClick={show}
				aria-label={props.alt ? `View larger: ${props.alt}` : "View larger image"}
				class={`zoomable block cursor-zoom-in rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${props.buttonClass ?? ""}`}
			>
				<img src={props.src} alt={props.alt} loading={props.loading} class={props.class}/>
			</button>

			<Portal>
				<dialog
					ref={dialogRef}
					aria-label="Image viewer"
					onClose={() => setOpen(false)}
					onClick={(e) => {
						if (e.target === e.currentTarget) close();
					}}
					class="m-auto max-h-[95dvh] max-w-[95vw] border-0 bg-transparent p-0 backdrop:bg-black/85"
				>
					<Show when={open()}>
						<figure class="m-0 flex flex-col items-center gap-3">
							<img
								src={props.src}
								alt={props.alt}
								class="block h-auto max-h-[85dvh] w-auto max-w-[95vw] rounded-lg object-contain"
							/>
							<button
								type="button"
								onClick={close}
								class="min-h-11 min-w-11 cursor-pointer rounded-lg bg-button px-5 font-semibold text-white hover:bg-button-hover"
							>
								Close
							</button>
						</figure>
					</Show>
				</dialog>
			</Portal>
		</>
	);
}
