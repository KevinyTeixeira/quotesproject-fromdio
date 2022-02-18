import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { QuoteService } from './services';

ReactDOM.render(
  <React.StrictMode>
	<App />
	{/* <QuoteService /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
