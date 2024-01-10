import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {
	EARTH,
	JUPITER,
	MARS,
	MERCURY,
	NEPTUNE,
	SATURN,
	URANUS,
	VENUS,
} from './constants/routes';
import ErrorPage from './pages/ErrorPage';
import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';
import Layout from './components/Layout';

const routes = [
	{
		path: '/',
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Navigate to={MERCURY} replace /> },
			{
				path: MERCURY,
				element: <Mercury />,
			},
			{
				path: VENUS,
				element: <Venus />,
			},
			{
				path: EARTH,
				element: <Earth />,
			},
			{
				path: MARS,
				element: <Mars />,
			},
			{
				path: JUPITER,
				element: <Jupiter />,
			},
			{
				path: SATURN,
				element: <Saturn />,
			},
			{
				path: URANUS,
				element: <Uranus />,
			},
			{
				path: NEPTUNE,
				element: <Neptune />,
			},
		],
	},
];

export default routes;
