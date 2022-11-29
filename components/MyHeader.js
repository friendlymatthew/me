import Link from "next/link";

export default function MyHeader({ color, tome }) {
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
		<div className="py-4 flex justify-center border-b border-gray-800 font-medium tracking-tighter">
			<div className="w-10/12 md:w-7/12 text-3xl font-opensans flex justify-between items-center">
				<span className="flex space-x-4 items-center">
					<Link href="/">
						{tome ? (
							<a className="font-normal cursor-pointer underline underline-offset-2 hover:no-underline text-base md:text-3xl">
								Matthew Kim
							</a>
						) : (
							<a className="font-normal cursor-pointer hover:underline underline-offset-2 text-base md:text-3xl">
								Matthew Kim
							</a>
						)}
					</Link>
					<span className="flex items-center space-x-3">
						<a
							className="cursor-pointer flex space-x-2 items-center group"
							href="https://github.com/friendlymatthew"
							target="_blank"
							rel="noreferrer"
						>
							<img src="/github.svg" className="h-6 w-6" />
						</a>
						<a
							className="cursor-pointer flex space-x-2 items-center group"
							href="https://www.linkedin.com/in/mat-thew/"
							target="_blank"
							rel="noreferrer"
						>
							<img src="/linkedin.svg" className="h-6 w-6" />
						</a>
					</span>
				</span>
				<div className="flex space-x-4 md:space-x-8 text-base md:text-lg font-normal">
					<Link href="/myresume">
						<a className="cursor-pointer hover:underline underline-offset-2">
							Resume
						</a>
					</Link>
					<Link href="/projects">
						<a className="cursor-pointer hover:underline underline-offset-2">
							Projects
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
