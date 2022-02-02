import { render, screen } from '@testing-library/react';
import App from './App';

test('check if button quote exist', () => {
	render(<App />);

	const buttonEl = screen.getByRole('button');
	expect(buttonEl).toBeInTheDocument();
});

test('check if quote exist', () => {
	render(<App />);

	const textEl = screen.getByText(/Speaker/);
	expect(textEl).toBeInTheDocument();
});

test('check if image exist', () => {
	render(<App />);

	const imageEl = screen.getByRole('img');
	expect(imageEl).toBeInTheDocument();
});
