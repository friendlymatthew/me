import { pdfjs, Document, Page } from "react-pdf";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
	return (
		<div className="h-screen flex justify-between flex-col bg-[#d2e4ff]">
			<header className="sticky top-0 z-50 bg-[#d2e4ff]">
				<MyHeader />
			</header>
			<div className="flex justify-center py-10">
				<Document file={"resume.pdf"}>
					<Page pageIndex={0} />
				</Document>
			</div>

			<div className="bg-[#d2e4ff]">
				<MyFooter />
			</div>
		</div>
	);
}
