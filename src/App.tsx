import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import GlobalFonts from "./fonts/fonts";
import Header from "./components/Header";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalFonts />
			<Header />
		</ThemeProvider>
	);
};

export default App;
