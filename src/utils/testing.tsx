import { render } from "@testing-library/react";
import { type ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";

export const renderThemed = (component: ReactNode, options: string[]) =>
	render(
		<MemoryRouter initialEntries={options}>
			<ThemeProvider theme={theme}>{component}</ThemeProvider>
		</MemoryRouter>
	);
