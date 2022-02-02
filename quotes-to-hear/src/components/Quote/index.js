import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Quote = ({ quote, speaker, children}) => {
	return (
		<>
			<QuoteStyled>{ children }, { quote} </QuoteStyled>
			<p>- { speaker }</p>
		</>
	)
}

// Style CSS
const QuoteStyled = styled.p`
	font-size: 2em;
	color: #FF5733;
	float: left;
`

export default Quote;
