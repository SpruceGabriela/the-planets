import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";
import GlobalFonts from './Fonts/fonts';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalFonts />
			<div>react app</div>
		</ThemeProvider>
	);
}

export default App;
