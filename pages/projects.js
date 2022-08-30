import Head from "next/head";

const projectDb = [
	{
		name: "The Watermark",
		img: "",
		date: "August 2022",
		desc: "A website to advertise a luxury condo in Honolulu, Hawaii. The purpose of this website was to connect interested tenants to the realtor. Website uses Email.js to send forms to realtor's inbox.",
		demo: "",
		code: "https://github.com/friendlymatthew/watermark",
		technologies: "Next.js, React.js, Tailwindcss",
	},
	{
		name: "Facebook Campaign Spending Interface",
		img: "/fbinterface.png",
		date: "March 2022 - May 2022",
		desc: "A data vizualization application that uses Facebook Ad data to track campaign spending for the US 2020 Presidential election. I worked with the Wesleyan Media Project to provide week-by-week insights. The website needed to be modular as data was constantly being updated.",
		demo: "https://presidentwmp.vercel.app/",
		code: "https://github.com/friendlymatthew/facebookad",
		technologies: "Next.js, React.js, TailwindCSS",
	},
	{
		name: "SeekWMP - API",
		img: "/seekapi.png",
		date: "March 2022",
		desc: "A cloud-computed service that stores training data for ML model. The service is high performing and scalable. ",
		demo: "",
		code: "https://github.com/friendlymatthew/wmpseekapi",
		technologies:
			"Serverless Framework and AWS: DynamoDB, Lambda, API Gateway, CloudWatch, and CloudFormation",
	},
	{
		name: "SeekWMP",
		img: "/seek.png",
		date: "Oct 2021 - Feb 2022",
		desc: "An internal web tool to help research members to efficiently mark the region of interest within news clips. The purpose of this web tool was to expedite the workflow and create an efficient data pipeline to crowdsource training data.",
		demo: "https://seekwmp.vercel.app/?market=Portland&station=WPFO&title=DailyMailTV&snippet=be+taking+to+make+the+risks+are+worth+their+rewards+medical+staff+housekeeping+and+that+of+se+--+jesse:+jay+jacobs+the+ceo+of+the+timberlake+family+of+camps+is+talking+about+what+it+takes+to+operate+a+summer+camp+in+the+time+of+covid-19+before+the+recently+announced+new+york+ban+jacobs+had+planned+to+open+some+of+his&coder=eraab&url=covid/xWPFO_20200619_1100PM.mp4&id=4&seek=1357",
		code: "https://github.com/friendlymatthew/seekwmp",
		technologies: "Next.js, React.js, ReactPlayer, TailwindCSS, Qualtrics",
	},
	{
		name: "YOBO (You Only airBend Once)",
		img: "/yobo.png",
		date: "May 2021",
		desc: "A custom YOLOv3 network that detects Aang's face from Avatar: The Last Airbender. My friend and I collected training data from Season 1. We used an 80/20 split on our training data. The model was successful detecting Aang's face.",
		demo: "https://www.youtube.com/watch?v=IXJ6LRCrv8Q&feature=youtu.be",
		code: "https://github.com/matthewkmkim/YOBO",
		technologies: "Python",
	},
];

export default function projects() {
	return (
		<div className="flex justify-center pb-20">
			<Head>
				<title>these are my projects</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
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
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&family=Raleway:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="w-10/12 md:w-6/12">
				<div className="grid grid-cols-1 divide-y-2">
					{projectDb.map(
						({ name, img, date, desc, demo, code, technologies }) => {
							return (
								<div key={name} className="py-8">
									<div className="text-md text-gray-600 pb-2 font-opensans tracking-tighter">
										{date}
									</div>

									<div className="grid grid-cols-1 lg:grid-cols-2 order-1 gap-x-0 lg:gap-x-12">
										<img
											src={img}
											className=" border-black order-first lg:order-last  mb-4"
										></img>
										<div className="col-span-1 flex flex-col justify-between space-y-6">
											<div>
												<div className="pb-1 text-2xl font-semibold font-raleway">
													{name}
												</div>

												<div className="tracking-tighter text-lg font-opensans">
													{" "}
													{desc}
												</div>
											</div>
										</div>
									</div>
									<div className="flex justify-start space-x-2 mt-4 items-center mb-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-4 h-4"
										>
											<path
												fillRule="evenodd"
												d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z"
												clipRule="evenodd"
											/>
										</svg>
										<div className="w-5/12 font-opensans tracking-tighter text-sm">
											{technologies}
										</div>
									</div>

									<div className="flex justify-start space-x-2">
										{demo ? (
											<a
												className="font-raleway font-semibold hover:text-white cursor-pointer items-center flex space-x-4 border-black border py-1 px-3 rounded-md hover:bg-black transition ease-in duration-200"
												href={demo}
												target="_blank"
												rel="noreferrer"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="w-5 h-5"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
													/>
												</svg>
												<div>Demo</div>
											</a>
										) : (
											<></>
										)}

										<a
											className="font-raleway  font-semibold hover:text-white cursor-pointer items-center flex space-x-4 border-black border py-1 px-3 rounded-md hover:bg-black transition ease-in duration-200"
											href={code}
											target="_blank"
											rel="noreferrer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-5 h-5"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
												/>
											</svg>
											<div>Code</div>
										</a>
									</div>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
}
