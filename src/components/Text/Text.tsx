import React from 'react';
import { type TextProps } from './Text.types';
import * as css from './Text.styles';

/**
 * @tag will have default 'p' since it'll probably be our most used tag
 */
const Text: React.FC<TextProps> = ({ children, tag = 'p' }) => {
	return <css.Text tag={tag}>{children}</css.Text>;
};

export default Text;
