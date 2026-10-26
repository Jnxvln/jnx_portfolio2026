import { ArrowRight } from "lucide-solid";

export default function ViewProjectsBanner() {
	return (
		<div class="w-full flex text-white bg-linear-to-r from-[#07003F] to-[#0f4b9b]">
			<a href="/projects" class="flex items-center justify-center p-14 w-1/3 text-center rounded-r-lg
            bg-linear-to-r from-[#7027A7] to-[#7027A7]
            hover:from-[#450f6e] hover:to-[#ad5d02]
            transition-colors duration-350 ease-in-out">
				<div class="flex gap-2 items-center justify-center text-lg font-bold text-white md:text-2xl md:gap-4">
					<div class="text-shadow-[1px_2px_0_#000000]">View Projects</div>
					<div><ArrowRight size={24} /></div>
				</div>
			</a>

			<div class="flex items-center justify-center w-full px-4 font-bold text-center md:text-2xl md:px-0">
				<div class="text-shadow-[1px_2px_0_#000000]">Have a look at some of the things I've built</div>
			</div>
		</div>
	)
}