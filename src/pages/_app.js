import { SnackbarProvider } from "@/components/Snackbar";
import { QueryProvider } from "@/schemas/default/useGraphAPI";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { StrictMode } from "react";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function App({ Component, pageProps }) {
	return (
		<StrictMode>
			<SnackbarProvider>
				<QueryProvider>
					<ThemeProvider theme={darkTheme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</QueryProvider>
			</SnackbarProvider>
		</StrictMode>
	);
}

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
