import React from 'react';
import styled from './globalStyle';
import { Button, Quote, Image } from './components';

function App() {

		const generateNewQuote = () => {
		console.log("Generating...")
	}

	return (
		<>
			<ContentStyled>
				<Quote>Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo. - Speaker</Quote>
				<Button onClick = { generateNewQuote }>New Quote</Button>
				<Image />
			</ContentStyled>
		</>
	);
}

// Style CSS
const ContentStyled = styled.div`
	height: 100vh;
	padding: 0 50px;
	justify-content: center;
	align-items: center;
`
export default App;
