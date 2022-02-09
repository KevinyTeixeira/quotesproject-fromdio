import { rest } from 'msw'; // mockar requisições usando ServiceWorker, ServiceWorker é uma tecnologia de browsers que fica na camada de rede. você pode fazer teste de requisições.
import { setupServer } from 'msw/node';
import { getQuote } from '../quotesService';

const response = { test: 'testing' };

// Create a Simulated Server to Response our Calls
const server = setupServer(
	rest.get(process.env.REACT_APP_API, (requisition, returnResponse, text) => {
		return returnResponse(text.json(response));
	})
);

beforeAll(() => server.listen()); // inicia a "escuta"
afterEach(() => server.resetHandlers()); // reseta as respostas
afterAll(() => server.close()); // encerra o servidor

test('transform json response into js object', async () => {
	const quote = await getQuote() // await para esperar a requisição ser completada.

	expect(quote).toStrictEqual(response);
})
