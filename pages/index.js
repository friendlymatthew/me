import Head from "next/head";
import Image from "next/image";
import { ApplicationContainer } from "../components/ApplicationContainer";
import HeroScreen from "../components/HeroScreen";

export default function Home() {
	return (
		<div>
			<Head>
				<title>whoami?</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&family=Raleway:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<HeroScreen />
		</div>
	);
}
