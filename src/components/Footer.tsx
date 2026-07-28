export default function Footer() {

	const currentYear: number = new Date().getFullYear();

	return (
		<footer class="py-6 text-center text-sm text-gray-500">
			&copy; Copyright {currentYear} Justin Cox
		</footer>
	)
}