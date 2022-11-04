import React, { useState, useEffect } from "react";

const postDb = [
	{
		id: "1",
		title: "Seekwmp",
		desc: "fpweijfpeiwjf",
	},
	{
		id: "1",
		title: "Seekwmp",
		desc: "fpweijfpeiwjf",
	},
	{
		id: "1",
		title: "Seekwmp",
		desc: "fpweijfpeiwjf",
	},
	{
		id: "1",
		title: "Seekwmp",
		desc: "fpweijfpeiwjf",
	},
	{
		id: "1",
		title: "Seekwmp",
		desc: "fpweijfpeiwjf",
	},
];

export default function Blogs() {
	return (
		<div className="font-normal text-lg">
			<div>My blog post</div>
			<ul className="w-full ">
				{postDb.map(({ id, title, desc }) => {
					return (
						<li className="flex font-normal text-lg border-y-[0.5px] cursor-pointer hover:bg-[#d4ffed] transition ease-in duration-200  p-4 bg-white">
							<div>{id}</div>
							<div>{title}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
