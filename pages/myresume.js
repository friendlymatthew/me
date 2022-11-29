import { pdfjs, Document, Page } from "react-pdf";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import Head from "next/head";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
	const handleResume = () => {
		// using Java Script method to get PDF file
		fetch("resume.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Matthew Kim Resume 22.pdf";
				alink.click();
			});
		});
	};
	return (
		<div className="text-[#123693] min-h-screen flex justify-between flex-col bg-[#d2e4ff]">
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
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&family=Raleway:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<header className="sticky top-0 z-50 bg-[#d2e4ff]">
				<MyHeader tome={true} />
			</header>
			<div className="flex justify-center py-10">
				<div>
					<a
						onClick={handleResume}
						className="cursor-pointer hover:underline underline-offset-2"
					>
						Download Resume
					</a>
					<div>
						<Document file={"resume.pdf"}>
							<Page pageIndex={0} />
						</Document>
					</div>
				</div>
			</div>

			<div className="bg-[#d2e4ff]">
				<MyFooter />
			</div>
		</div>
	);
}
