import {} from 'styled-components';
import { type ThemeTypes } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeTypes {} // extends the global DefaultTheme with ThemeType.
}
