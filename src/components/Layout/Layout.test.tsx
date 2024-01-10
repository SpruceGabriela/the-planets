import { screen } from '@testing-library/react';
import { renderThemed } from '../../utils/testing';
import Layout from './Layout';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('Layout', () => {
	it('should be defined', () => {
		expect(Layout).toBeDefined();
	});

	it('should render children component', () => {
		renderThemed(
			<Layout>
				<p>test</p>
			</Layout>,
			['/'],
		);

		expect(screen.getByText('test')).toBeInTheDocument();
	});
});
