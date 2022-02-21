import {React, useState, useEffect} from 'react';
import { Button, Quote, Image } from './components';
import { GlobalStyle } from './globalStyle';
import { dsv } from 'd3';
import styled from 'styled-components';

const csvUrl  =  ('https://gist.githubusercontent.com/KevinyTeixeira/bca251b9b051c20260dc067b0508cc25/raw/62da06c488dc20c39d736980d99757435073cb34/Speaks.csv');

export const App = () => {

	const [data, setData] = useState([null]);
	const [speak, setSpeak] = useState([null]);
	const [speaker, setSpeaker] = useState([null]);

	const updateQuote = () => {
		dsv(";", csvUrl).then(data => {	
			setData(data);
			const shuffleData = data[Math.floor(data.length * Math.random())];
			setSpeak(shuffleData.Speak);
			setSpeaker(shuffleData.Speaker);
		})
	}

	useEffect (() => {
		updateQuote();
	}, [])
	
	return (
		<>
			<GlobalStyle src = { Image(speaker) } />
					<Content>
						<Button onClick = { updateQuote }>New Quote!</Button>
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
