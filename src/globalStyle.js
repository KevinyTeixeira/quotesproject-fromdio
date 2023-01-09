import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		height: 100vh;
		overflow: hidden; /* Hide scrollbars */
		background: url( ${ props => props.src } ) left no-repeat;
		background-size: cover;
		font-family: fantasy;
		transition: ease 1s, transform 2s;
	}
`;
