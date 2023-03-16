/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createElement } from "react";
import styled, { css } from "styled-components";
import { type TagVariants } from "./Text.types";

export const Text = styled(({ tag, children, ...props }) =>
	createElement(tag, props, children)
)`
	padding: 0;
	margin: 0;
	color: ${(props) => props.theme.white};
	${(props) => getStyleByTag(props.tag)}
`;

const getStyleByTag = (variant: TagVariants) => {
	switch (variant) {
		case "h1":
			return css`
				font-size: 80px;
				line-height: 103px;
				font-family: "Antonio";
				font-weight: 500;
				text-transform: uppercase;
			`;
		case "h2":
			return css`
				font-size: 40px;
				line-height: 52px;
				letter-spacing: -1.5px;
				font-family: "Antonio";
				font-weight: 500;
				text-transform: uppercase;
			`;
		case "h3":
			return css`
				font-size: 12px;
				line-height: 25px;
				letter-spacing: -2.6px;
				font-family: "Spartan";
				font-weight: 700;
				text-transform: uppercase;
			`;
		case "h4":
			return css`
				font-size: 11px;
				line-height: 25px;
				letter-spacing: 1px;
				font-family: "Spartan";
				font-weight: 700;
				text-transform: uppercase;
			`;
		case "p":
			return css`
				font-size: 14px;
				line-height: 25px;
				font-family: "Spartan";
				font-weight: 400;
			`;
		default:
			return css`
				font-size: 14px;
				line-height: 25px;
				font-family: "Spartan";
				font-weight: 400;
			`;
	}
};
