import styled from "styled-components";

export const MenuList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	padding: 0;

	& > li {
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

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
`;
