import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, useNavigate } from "react-router-dom";
import { menuItems, type MenuItemsProps } from "../../constants/menuItems";
import Text from "../Text";
import { BsCircleFill, BsChevronRight } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import * as css from "./Header.styles";
import { useTheme } from "styled-components";

const Header: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const MobileLink = ({ title, route }: MenuItemsProps) => {
		const getIconColor = theme.colors[title];

		return (
			<css.MenuItem
				onClick={() => {
					setIsOpen(!isOpen);
					navigate(route);
				}}
			>
				<div>
					<BsCircleFill color={getIconColor} />
					<Text tag="h4">{title}</Text>
				</div>
				<BsChevronRight color={theme.colors.lightGrey} size={16} />
			</css.MenuItem>
		);
	};

	return (
		<css.Header>
			<Text tag="h2">the planets</Text>
			<css.MenuList isOpen={isOpen}>
				{menuItems.map((item) => {
					if (isMobile) {
						return (
							<MobileLink
								key={item.id}
								id={item.id}
								title={item.title}
								route={item.route}
							/>
						);
					}
					return (
						<NavLink key={item.id} to={item.route}>
							<Text tag="h4">{item.title}</Text>
						</NavLink>
					);
				})}
			</css.MenuList>
			{isMobile ? (
				<css.ToggleButton>
					<GiHamburgerMenu
						size={24}
						color={isOpen ? theme.colors.darkGrey : theme.colors.white}
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					/>
				</css.ToggleButton>
			) : null}
		</css.Header>
	);
};

export default Header;
