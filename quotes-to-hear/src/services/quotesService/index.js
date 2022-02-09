export const getQuote = () => { // Turn json response into js obj
	return fetch(process.env.REACT_APP_API)
		.then(response => response.json());
}
