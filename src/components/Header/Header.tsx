import React from "react";
import { NavLink } from "react-router-dom";

import { menuItems } from "../../constants/menuItems";
import Text from "../Text";
import * as css from "./Header.styles";

const Header: React.FC = () => {
	return (
		<css.Header>
			<Text tag="h2">planets</Text>
			<css.MenuList>
				{menuItems.map((item) => (
					<li key={item.id}>
						<NavLink to={item.route}>
							<Text tag="h4">{item.title}</Text>
						</NavLink>
					</li>
				))}
			</css.MenuList>
		</css.Header>
	);
};

export default Header;
