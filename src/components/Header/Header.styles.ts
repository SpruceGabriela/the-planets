/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from "styled-components";
import { type MenuProps } from "./Header.types";

export const Header = styled.header`
	height: auto;
	width: 100%;
	box-sizing: border-box;
	padding: 12px 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.white};
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);

	@media (max-width: 768px) {
		padding: 12px 24px;
	}
`;

export const MenuList = styled.ul<MenuProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	padding: 0;
	margin: 0;

	@media (max-width: 768px) {
		position: fixed;
		top: 77px;
		right: -200%;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		height: 100%;
		width: -webkit-fill-available;
		max-width: 100%;
		background-color: ${(props) => props.theme.background};
		padding: 0 24px;
		gap: 0;
		transition: 0.3s;
		${(props) => getToggleStyle(props.isOpen)}
	}
`;

export const MenuItem = styled.li`
	list-style: none;
	padding: 0;
	margin: 0;

	& > div {
		display: flex;
		justify-content: center;
		align-items: center;

		& > svg {
			margin-right: 24px;
		}

		& > h4 {
			font-size: 15px;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 0;

		&:not(:last-of-type) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		}
	}
`;

export const ToggleButton = styled.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const getToggleStyle = (isOpen: boolean) => {
	if (isOpen)
		return css`
			right: 0;
		`;
	return null;
};
