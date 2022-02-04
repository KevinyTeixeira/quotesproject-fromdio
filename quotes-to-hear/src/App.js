import React from 'react';
import styled from 'styled-components';
import { Button, Quote, Image } from './components';
import { GlobalStyle } from './globalStyle';

export function App() {

	const generateNewQuote = () => {
		console.log("Generating...")
	}

	const speak = "Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo."
	const speaker = "Martin Luther King";

	return (
		<>
			<GlobalStyle src = { Image } />
					<Content>
						<Button onClick = { generateNewQuote }>New Quote</Button>
						<Quote speak = { speak }  speaker = { speaker }/>
					</Content>
		</>
	);
}

const Content = styled.div`
	position: absolute;
	height: 300px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	padding: 0 50px;
	text-align: center;
`;
