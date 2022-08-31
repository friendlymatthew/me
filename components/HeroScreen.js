import Link from "next/link";

export default function HeroScreen() {
	return (
		<div className="flex justify-center font-opensans tracking-tighter">
			<div className=" text-black text-start my-8 w-10/12 md:w-6/12 text-xl md:text-2xl flex flex-col space-y-20">
				<span className="">
					I&apos;m a software engineer that uses cloud services to build
					scalable, cost-effective, and efficient applications.{" "}
					<Link href="/proof">
						<span className="text-sm text-blue-700 hover:no-underline underline underline-offset-1 cursor-pointer">
							Proof
						</span>
					</Link>
				</span>

				<span>
					I&apos;m currently
					<a
						href="https://courtst-farmers.vercel.app"
						target="_blank"
						rel="noreferrer"
						className="group cursor-pointer text-blue-700 hover:no-underline underline  underline-offset-4"
					>
						{" "}
						building an intelligent automated grow system and software to raise
						and sell organic spinach{" "}
					</a>
					<a className="cursor-pointer text-emerald-800 hover:no-underline underline underline-offset-4">
						with the data to back it up.
					</a>
				</span>

				<span>
					I&apos;m interested in building web and cloud-based solutions to solve
					problems in the farming industry.
				</span>

				<span>
					<a className=" cursor-pointer text-blue-700 hover:no-underline underline underline-offset-4">
						This
					</a>{" "}
					is my resume. You can read more about my projects{" "}
					<Link href="/projects">
						<span className="cursor-pointer text-blue-700 hover:no-underline underline underline-offset-4">
							{" "}
							here
						</span>
					</Link>
					.
				</span>

				<div className="py-20">
					<div className="">
						My favorite technologies are Java, React.js, Next.js, Node.js, and
						AWS.
					</div>
					<div className="pt-12">
						My favorite AWS services are DynamoDB, Lambda, Cloudwatch, SQS, S3,
						API Gateway, AWS IoT.
					</div>
					<div className="pt-4">My least favorite AWS service is Billing.</div>
				</div>

				<div className="pb-20">I enjoy simple design.</div>
			</div>
		</div>
	);
}
