import { AppShell, Footer, Group, Header, Text } from "@mantine/core";
import MyFooter from "./MyFooter";
import Link from "next/link";

export const ApplicationContainer = ({ children }) => {
	return (
		<AppShell
			styles={{
				main: {
					background: "#FFFFFF",
					width: "100vw",
					height: "100vh",
					paddingLeft: "0px",
				},
			}}
			fixed
			footer={
				<Footer height={60} p="md">
					<MyFooter />
				</Footer>
			}
			header={
				<Header height={70}>
					<div className="flex justify-center py-4">
						<div className="justify-between flex w-6/12 items-end">
							<Link href="/">
								<div className="text-2xl cursor-pointer font-semibold">
									Matthew Kim
								</div>
							</Link>
							<div className="font-semibold text-xl">
								<Link href="/projects">
									<div className="cursor-pointer">Projects</div>
								</Link>
							</div>
						</div>
					</div>
				</Header>
			}
		>
			{children}
		</AppShell>
	);
};
