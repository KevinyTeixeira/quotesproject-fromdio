import styled from 'styled-components'
import { string } from 'prop-types'

export const Quote = ({ speak, speaker}) => {
	return (
		<Wrapper>
			<SpeakStyled>{ speak} </SpeakStyled>
			<SpeakerStyled>- { speaker }</SpeakerStyled>
		</Wrapper>
	)
}

// Style CSS
const SpeakStyled = styled.p`
	font-size: 2em;
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

const Wrapper = styled.p`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`

//TYPE VERIFY
Quote.propTypes = {
	SpeakStyled: string,
	SpeakerStyled: string
}

export default Quote;
