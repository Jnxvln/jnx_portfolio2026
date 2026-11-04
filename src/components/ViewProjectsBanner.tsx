import { ArrowRight } from "lucide-solid";

export default function ViewProjectsBanner() {
	return (
		<div class="w-full flex text-white bg-linear-to-r from-banner-from to-banner-to">
			<a href="/projects" class="flex items-center justify-center p-14 w-1/3 text-center rounded-r-lg
            bg-linear-to-r from-cta to-cta
            hover:from-cta-hover-from hover:to-cta-hover-to
            transition-colors duration-350 ease-in-out">
				<div class="flex gap-2 items-center justify-center text-lg font-bold text-white md:text-2xl md:gap-4">
					<div class="text-shadow-hero">View Projects</div>
					<div><ArrowRight size={24} /></div>
				</div>
			</a>

			<div class="flex items-center justify-center w-full px-4 font-bold text-center md:text-2xl md:px-0">
				<div class="text-shadow-hero">Have a look at some of the things I've built</div>
			</div>
		</div>
	)
}