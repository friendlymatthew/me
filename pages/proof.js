import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import Head from "next/head";

export default function Proof() {
	return (
		<div className="bg-[#d2e4ff] text-[#123693] h-screen flex flex-col justify-between">
			<Head>
				<title>these are my projects</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
				<link rel="icon" href="/favicon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&family=Raleway:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<header className="sticky top-0 z-50 bg-[#d2e4ff]">
				<MyHeader />
			</header>
			<div className="grid grid-cols-1 place-items-center py-8">
				<img src="/proof.png" className="w-8/12"></img>
			</div>
			<MyFooter />
		</div>
	);
}
