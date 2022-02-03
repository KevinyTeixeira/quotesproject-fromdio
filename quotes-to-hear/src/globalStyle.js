import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
	overflow: hidden; /* Hide scrollbars */
	background: url(${props => props.src}) center no-repeat;
	background-size: cover;
	font-family: fantasy;
	}
`;
