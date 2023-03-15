import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div>react app</div>
		</ThemeProvider>
	);
}

export default App;
