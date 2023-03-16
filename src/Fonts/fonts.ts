import { createGlobalStyle } from "styled-components";

import AntonioWoff from "./Antonio.woff";
import AntonioWoff2 from "./Antonio.woff2";
import SpartanWoff from "./Spartan.woff";
import SpartanWoff2 from "./Spartan.woff2";

export default createGlobalStyle`
	@font-face {
			font-family: 'Antonio';
			src: local('Antonio'), local('Antonio'),
			url(${AntonioWoff}) format('woff');
	}

	@font-face {
		font-family: 'Antonio';
		src: local('Antonio'), local('Antonio'),
		url(${AntonioWoff2}) format('woff2'),
	}

	@font-face {
		font-family: 'Spartan';
		src: local('Spartan'), local('Spartan'),
		url(${SpartanWoff}) format('woff');
	}

	@font-face {
		font-family: 'Spartan';
		src: local('Spartan'), local('Spartan'),
		url(${SpartanWoff2}) format('woff2'),
	}

	body {
		margin: 0;
		font-family: sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		}
`;
