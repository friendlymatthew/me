export default function MyFooter() {
	return (
		<div className="flex justify-center items-center">
			<div className="flex space-x-12 items-center">
				<a
					className="cursor-pointer flex space-x-2 items-center"
					href="https://github.com/friendlymatthew"
					target="_blank"
					rel="no_referrer"
				>
					<img src="/github.svg" className="h-6 w-6" />
					<div>friendlymatthew</div>
				</a>
				<a
					className="cursor-pointer flex space-x-2 items-center"
					href="https://www.linkedin.com/in/mat-thew/"
					target="_blank"
					rel="no_referrer"
				>
					<img src="/linkedin.svg" className="h-6 w-6" />
					<div>in/mat-thew</div>
				</a>
			</div>
		</div>
	);
}
