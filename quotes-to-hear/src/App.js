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
  height: 100vh;
  box-sizing: border-box;
  padding: 10% 50px;
  text-align: center;
`;
