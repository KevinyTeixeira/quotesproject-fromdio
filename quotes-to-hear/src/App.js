import {React, useState, useEffect} from 'react';
import { Button, Quote } from './components';
import { GlobalStyle } from './globalStyle';
import { dsv } from 'd3';
import styled from 'styled-components';

// Loading '.env' Variables
const csvUrl  =  process.env.REACT_APP_CSVDB;
const imgFolder = process.env.REACT_APP_IMGFOLDER;

export const App = () => {

	const [setData] = useState([null]);
	const [speak, setSpeak] = useState([null]);
	const [speaker, setSpeaker] = useState([null]);
	const [background, setBackground] = useState(require(imgFolder + 'index.jpg'))

	const updateImage = (Speaker) => {
		Speaker = Speaker.replace(/ /g, ""); // Remove spaces from speaker
		const urlPath = imgFolder;
		const urlMount = require((urlPath + Speaker + ".jpg"));
		setBackground(urlMount);
	}

	const updateQuote = () => {
		dsv(";", csvUrl).then(data => {	
			setData(data);
			const shuffleData = data[Math.floor(data.length * Math.random())];
			setSpeak(shuffleData.Speak);
			setSpeaker(shuffleData.Speaker);
			updateImage(shuffleData.Speaker);
		})
	}

	useEffect (() => {
		updateQuote();
	}, [])
	
	return (
		<>
			<GlobalStyle src = { background } />
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
