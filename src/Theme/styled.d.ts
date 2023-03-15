import {} from "styled-components";
import { ThemeTypes } from "./theme";

declare module "styled-components" {
	export interface DefaultTheme extends ThemeTypes {} //extends the global DefaultTheme with ThemeType.
}
