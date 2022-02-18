import { React, useState, useEffect } from 'react'
import { dsv } from 'd3';

 const csvUrl  =  ('https://gist.githubusercontent.com/KevinyTeixeira/bca251b9b051c20260dc067b0508cc25/raw/62da06c488dc20c39d736980d99757435073cb34/Speaks.csv');

export const QuoteService = () => {

	const [data, setData] = useState([null]);

	useEffect (() => {

		dsv(";", csvUrl).then(data => {
			setData(data);
		})

	}, [])

	return [data.speak, data.Speaker];
}
