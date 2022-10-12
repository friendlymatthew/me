import Link from "next/link";
import Button from "../components/Button";

export default function Hero() {
	return (
		<div>
			<section className="grid grid-cols-1 place-items-center">
				<section className="bg-[#e6d6ff] h-64"></section>
			</section>
			<section className="text-[#123693] flex justify-center w-full min-h-screen">
				<div className="flex flex-col space-y-4 text-3xl font-opensans pt-8 items-center">
					<section className=" w-7/12 ">
						<span className=" ">
							I&apos;m a software engineer that uses cloud services to build
							scalable, cost-effective, and efficient applications.{"   "}
							<span className="text-base">
								<Link href="/proof">
									<Button title={"Proof"} />
								</Link>
							</span>
						</span>
					</section>

					<a className="bg-[#e6d6ff] w-full">
						<section className="text-xl pt-12 bg-[#e6d6ff]">
							I'm currently building a cloud service to analyze optimal soil
							conditions for crop growth.
						</section>
					</a>
				</div>
			</section>
		</div>
	);
}
