import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

 const Button = (props) => {

	const { children, onClick } = props;

	return (
			<StyledButton onClick = { onClick }>
					{ children }
			</StyledButton>
	)
}

// Style CSS
const StyledButton = styled.btn`
	border-radius: 25px;
`

// Typechecking
//Button.propTypes = {
//	onClick: PropTypes.func.isRequired
//}

export default Button;
