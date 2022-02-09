import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

// SETUP SERVER TO TEST API
const response = { speaker: 'Speaker', quote: 'test quote' };

const server = setupServer(
	rest.get(process.env.REACT_APP_API, (requisition, returnResponse, text) => {
		return returnResponse(text.json(response));
	})
);

beforeAll(() => server.listen()); // inicia a "escuta"
afterEach(() => server.resetHandlers()); // reseta as respostas
afterAll(() => server.close()); // encerra o servidor

// TESTS
test('renders the app with a button, a quote and a button', () => {
	render(<App />);

	const buttonEl = screen.getByRole('button');
	// const textEl = screen.getByText('"');
	expect(buttonEl).toBeInTheDocument();
	// clsexpect(textEl).toBeInTheDocument();
});

test('calls api on button click and update its text', async () => {
	render(<App />);

	const buttonEl = screen.getByRole('button');
	fireEvent.click(buttonEl);

	const quoteEl = await screen.findByText(response.quote);

	expect(quoteEl).toBeInTheDocument();
})
