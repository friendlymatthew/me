export default function Button({ title }) {
	return (
		<a className=" bg-[#ffeacc] hover:bg-[#d4ffed] cursor-pointer py-1 px-2  transition ease-in duration-100">
			{title}
		</a>
	);
}
