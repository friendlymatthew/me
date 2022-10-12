import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";

const technologiesDb = [
	{
		name: "Languages",
		things: [
			{
				thing: "Java",
			},
			{
				thing: "Python",
			},
			{
				thing: "Javascript",
			},
		],
	},
	{
		name: "Frameworks",
		things: [
			{
				thing: "Next.js",
			},
			{
				thing: "React.js",
			},
			{
				thing: "React Native",
			},
			{
				thing: "Node.js",
			},
			{
				thing: "Serverless Framework",
			},
			{
				thing: "Express.js",
			},
		],
	},
	{
		name: "Databases",
		things: [
			{
				thing: "MongoDB",
			},
			{
				thing: "DynamoDB",
			},
		],
	},
	{
		name: "Cloud",
		things: [
			{
				thing: "AWS",
				subthings: [
					{
						sthing: "Lambda",
					},
					{
						sthing: "DynamoDB",
					},
					{
						sthing: "API Gateway",
					},
					{
						sthing: "IOT Core",
					},
					{
						sthing: "CloudFormation",
					},
					{
						sthing: "CloudWatch",
					},
					{
						sthing: "IAM",
					},
				],
			},
		],
	},
];

export default function Home() {
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
		<div className="text-[#123693] tracking-tighter font-medium font-opensans flex flex-col  bg-[#d2e4ff]">
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
				<MyHeader />
			</header>

			<main className="relative">
				<section className="grid grid-cols-1 place-items-center bg-[#d2e4ff]">
					<div className="w-10/12 md:w-7/12 text-3xl py-16">
						<span>
							<span>
								I&apos;m a software engineer that uses cloud services to build
								scalable, cost-effective, and efficient applications.{"   "}
							</span>
							<Link href="/proof">
								<a className="font-normal text-lg cursor-pointer hover:underline underline-offset-2 hover:bg-[#0053d6] hover:text-white bg-[#ffdb13] rounded-xl p-2 transition ease-in duration-100">
									Proof
								</a>
							</Link>
						</span>

						<div className="text-xl font-normal mt-8 grid lg:grid-cols-4 grid-cols-1 pb-6">
							<div className="col-span-2 flex space-x-4 items-center cursor-pointer group py-2">
								<a
									onClick={handleResume}
									className="group-hover:underline underline-offset-2 "
								>
									Download Resume
								</a>
								<a
									onClick={handleResume}
									className="cursor-pointer group-hover:ring-4 bg-[#ffdb13] group-hover:bg-[#0053d6] transition ease-in duration-200 h-12 w-12 flex justify-center items-center  rounded-full"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6 group-hover:text-white duration-100 ease-in transition "
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
										/>
									</svg>
								</a>
							</div>
							<Link href="/projects">
								<div className="col-span-2  flex space-x-4 items-center cursor-pointer group py-2">
									<div className="group-hover:underline underline-offset-2 ">
										See Projects
									</div>

									<a className="cursor-pointer group-hover:ring-4 bg-[#ffdb13] group-hover:bg-[#0053d6] transition ease-in duration-200 h-12 w-12 flex justify-center items-center  rounded-full">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-6 h-6 group-hover:text-white duration-100 ease-in transition "
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
											/>
										</svg>
									</a>
								</div>
							</Link>
						</div>

						<div className="my-8">
							<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 lg:grid-cols-4 gap-y-8 lg:gap-0 text-xl">
								{technologiesDb.map(({ name, things }) => {
									return (
										<div className="my-1 " key={name}>
											<div className=" mb-1">{name}</div>
											<ul className="font-normal">
												{things.map(({ thing, subthings }) => {
													return (
														<div key={thing}>
															<li className="mb-0.5">{thing}</li>
															{subthings ? (
																<ul>
																	{subthings.map(({ sthing }) => {
																		return (
																			<li key={sthing} className="text-base">
																				◦ {sthing}
																			</li>
																		);
																	})}
																</ul>
															) : (
																<></>
															)}
														</div>
													);
												})}
											</ul>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className="bg-[#ffeacc] flex justify-center text-xl font-normal">
						<div className="w-10/12 md:w-7/12 py-16 grid grid-col-1 lg:gap-y-0 gap-y-4 lg:gap-x-12 lg:grid-cols-2">
							<div className="bg-[#e6d6ff]"></div>
							<div className="flex flex-col justify-between h-[600px]">
								<div>
									<div>
										I&apos;m currently building a data analytics platform from
										soil measured by our smart{" "}
										<span className="cursor-help">IoT</span> device using AWS.
									</div>

									<div className="pt-8 flex space-x-4 items-center cursor-pointer group py-2">
										<a
											target="_blank"
											rel="noreferrer"
											href="https://www.github.com/friendlymatthew"
										>
											<div className="group-hover:underline underline-offset-2 ">
												Coming Soon
											</div>
										</a>
										<a className="cursor-pointer group-hover:ring-4 bg-[#ffdb13] group-hover:bg-[#0053d6] transition ease-in duration-200 h-12 w-12 flex justify-center items-center  rounded-full">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-6 h-6 group-hover:text-white duration-100 ease-in transition "
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
												/>
											</svg>
										</a>
									</div>
								</div>

								<div className="text-lg">
									<div className="pb-1">Our Soil Measurements</div>
									<ul>
										<li>◦ Temperature</li>
										<li>◦ Moisture</li>
										<li>◦ Acidity</li>
										<li>◦ NPK</li>
										<li className="indent-8">◦ Nitrogen</li>
										<li className="indent-8">◦ Phosphorous</li>
										<li className="indent-8">◦ Potassium</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<div className="bg-[#d2e4ff]">
				<MyFooter />
			</div>
		</div>
	);
}
