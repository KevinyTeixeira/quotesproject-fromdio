import React, { useState, useEffect } from 'react'
import { csv, csvParse, dsvFormat } from 'd3';
import  axios from 'axios';

const csvUrl  =  ('https://gist.githubusercontent.com/KevinyTeixeira/bca251b9b051c20260dc067b0508cc25/raw/62da06c488dc20c39d736980d99757435073cb34/Speaks.csv');

export const QuoteService = () => {

	const [data, setData] = useState([null]);

	const message = data => {
		let message = '';
		message = message + data.lenght + ' rows\n';
		return	message;
	}

	useEffect (() => {
		// const axiosGet = async (url) => {
		// 	const response = await axios.get(url);
		// 	return await response.data;
		// }

		csv(csvUrl).then(data => {
			dsvFormat(";");
			csvParse("Speak,Speaker");
			setData(data);
			console.log(data[0]);
		})

		// axiosGet(csvUrl).then(text => {
		// 	console.log(csvParse(text));
		// 	console.log(data.length + ' rows ');
		// });

			// // // Como formatar e em seguida, retornar o valor formatado?

			// // const formatData = (dataReceived) => {
			// // 	// dsvFormat(";", dataReceived);
			// // 	csvParse(dataReceived);
			// // 	console.log(dataReceived);
			// // 	console.log(dataReceived.length);
			// // 	return dataReceived;
			// // }

			// // setData(() =>formatData(response.data));
			// // }
			// // axiosGet();
	}, [])
	return (
		<div>Data is : { data ? message(data) : 'Loading..' }</div>
	)
}
