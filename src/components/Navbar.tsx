import {useLocation} from "@solidjs/router";

export default function Navbar() {

	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;

	return (
		<div class="flex bg-slate-300">
			<a
				class="px-5 py-3 hover:bg-slate-400 transition duration-150"
				classList={{"bg-slate-400": isActive("/")}}
				href="/"
			>
				Home
			</a>
			<a
				class="px-5 py-3 hover:bg-slate-400 transition duration-150"
				classList={{"bg-slate-400": isActive("/projects")}}
				href="/projects"
			>
				Projects
			</a>
			<a
				class="px-5 py-3 hover:bg-slate-400 transition duration-150"
				classList={{"bg-slate-400": isActive("/connect")}}
				href="/connect"
			>
				Connect
			</a>
		</div>
	)
}