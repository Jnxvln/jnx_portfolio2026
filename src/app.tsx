import {MetaProvider, Title} from "@solidjs/meta";
import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {Suspense} from "solid-js";
import "./app.css";
import Navbar from "~/components/Navbar";

export default function App() {
	return (
		<Router root={props => (
			<MetaProvider>
				<div class="max-w-5xl mx-auto">
					<Title>Portfolio | Home</Title>
					<Navbar/>
					<Suspense>{props.children}</Suspense>
				</div>
			</MetaProvider>
		)}
		>
			<FileRoutes/>
		</Router>
	);
}
