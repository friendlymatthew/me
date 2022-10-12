import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { MantineProvider } from "@mantine/core";
import { ApplicationContainer } from "../components/ApplicationContainer";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
