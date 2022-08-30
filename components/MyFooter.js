export default function MyFooter() {
	return (
		<div className="flex justify-center items-center font-raleway tracking-tighter">
			<div className="flex space-x-12 items-center">
				<a
					className="cursor-pointer flex space-x-2 items-center group"
					href="https://github.com/friendlymatthew"
					target="_blank"
					rel="noreferrer"
				>
					<img src="/github.svg" className="h-6 w-6" />
					<div className="group-hover:underline underline-offset-4">
						friendlymatthew
					</div>
				</a>
				<a
					className="cursor-pointer flex space-x-2 items-center group"
					href="https://www.linkedin.com/in/mat-thew/"
					target="_blank"
					rel="noreferrer"
				>
					<img src="/linkedin.svg" className="h-6 w-6" />
					<div className="group-hover:underline underline-offset-4">
						in/mat-thew
					</div>
				</a>
			</div>
		</div>
	);
}
