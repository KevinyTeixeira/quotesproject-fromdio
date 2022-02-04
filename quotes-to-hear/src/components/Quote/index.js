import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Quote = ({ speak, speaker}) => {
	return (
		<>
			<SpeakStyled>{ speak} </SpeakStyled>
			<SpeakerStyled>- { speaker }</SpeakerStyled>
		</>
	)
}

// Style CSS
const SpeakStyled = styled.p`
	font-size: 8vw;
	color: white;
	margin: 0;
	background-color: rgba(0, 0, 0, 0.7);
	padding: 1.2rem;
	border-radius: 1rem;
`

const SpeakerStyled = styled.p`
	margin-top: 1rem;
	font-family: Brush Script MT;
	font-size: 2rem;
	text-align: right;
	color: white;
`

export default Quote;
