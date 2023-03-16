import React from "react";
import { menuItems } from "../../constants/menuItems";
import Text from "../Text";
import * as css from "./Header.styles";

const Header: React.FC = () => {
	return (
		<css.Header>
			<Text tag="h2">planets</Text>
			<css.MenuList>
				{menuItems.map((item) => (
					<Text key={item.id} tag="h4">
						{item.title}
					</Text>
				))}
				<li></li>
			</css.MenuList>
		</css.Header>
	);
};

export default Header;
