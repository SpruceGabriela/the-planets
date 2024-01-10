import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
	const error = useRouteError();
	console.error(error);

	if (isRouteErrorResponse(error)) {
		return (
			<div id='error-page'>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText}</i>
				</p>
			</div>
		);
	}
	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
		</div>
	);
};

export default ErrorPage;
