import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import GlobalFonts from "./Fonts/fonts";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalFonts />
			<div>react app</div>
		</ThemeProvider>
	);
};

export default App;
