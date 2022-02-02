import { createGlobalStyle } from 'styled-components';
import bgImg from './components/Image/'

const globalStyle = createGlobalStyle`
	background-size: cover;
	background: ${bgImg} center no-repeat;
`

export default globalStyle;
