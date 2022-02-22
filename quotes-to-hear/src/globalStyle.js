import { createGlobalStyle } from 'styled-components';
import { Image } from './components/Image'

export const GlobalStyle = createGlobalStyle`
	body {
		height: 100vh;
		overflow: hidden; /* Hide scrollbars */
		background: url( ${ Image } ) center no-repeat;
		background-size: cover;
		font-family: fantasy;
	}
`;
