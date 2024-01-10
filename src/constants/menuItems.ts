import {
	EARTH,
	JUPITER,
	MARS,
	MERCURY,
	NEPTUNE,
	SATURN,
	URANUS,
	VENUS,
} from "./routes";

export interface MenuItemsProps {
	id: number;
	title: string;
	route: string;
}

export const menuItems: MenuItemsProps[] = [
	{
		id: 1,
		route: MERCURY,
		title: "mercury",
	},
	{
		id: 2,
		route: VENUS,
		title: "venus",
	},
	{
		id: 3,
		route: EARTH,
		title: "earth",
	},
	{
		id: 4,
		route: MARS,
		title: "mars",
	},
	{
		id: 5,
		route: JUPITER,
		title: "jupiter",
	},
	{
		id: 6,
		route: SATURN,
		title: "saturn",
	},
	{
		id: 7,
		route: URANUS,
		title: "uranus",
	},
	{
		id: 8,
		route: NEPTUNE,
		title: "neptune",
	},
];
