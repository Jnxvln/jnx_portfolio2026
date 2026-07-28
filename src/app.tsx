import {MetaProvider, Title} from "@solidjs/meta";
import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {Suspense} from "solid-js";
import "./app.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import BackToTop from "~/components/BackToTop";

export default function App() {
	return (
		<Router root={props => (
			<MetaProvider>
				<Title>Portfolio | Home</Title>
				<div class="min-h-screen flex flex-col">
					<Navbar/>
					<main class="flex-1 w-full max-w-5xl mx-auto">
						<Suspense>{props.children}</Suspense>
					</main>
					<Footer/>
					<BackToTop/>
				</div>
			</MetaProvider>
		)}
		>
			<FileRoutes/>
		</Router>
	);
}