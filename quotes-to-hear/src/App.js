import {React, useState} from 'react';
import styled from 'styled-components';
import { Button, Quote, Image } from './components';
import { GlobalStyle } from './globalStyle';
import { getQuote } from './services/quotesService';

export function App() {

	const [quoteState, setQuoteState] = useState({
		speak: '"' + "Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo." + '"',
		speaker: "Martin Luther King"
	});

	const generateNewQuote = async () => {
		const quote = await getQuote();
		setQuoteState(quote);
	}

	return (
		<>
			<GlobalStyle src = { Image } />
					<Content>
						<Button onClick = { generateNewQuote }>New Quote!</Button>
						<Quote speak = { quoteState.speak }  speaker = { quoteState.speaker }/>
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
