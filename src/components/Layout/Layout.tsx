import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";
import GlobalFonts from "../../fonts/fonts";
import Header from "../Header";
import { type LayoutProps } from "./LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalFonts />
		<Header />
		{children}
	</ThemeProvider>
);

export default Layout;
