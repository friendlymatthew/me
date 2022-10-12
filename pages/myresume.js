import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
	return (
		<div className="h-screen  flex flex-col justify-start items-center w-full">
			<Document file={"resume.pdf"}>
				<Page pageIndex={0} />
			</Document>
		</div>
	);
}
