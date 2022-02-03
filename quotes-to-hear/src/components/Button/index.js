import styled from 'styled-components'
import PropTypes from 'prop-types'

export  const Button = (props) => {

	const { children, onClick } = props;

	return (
			<StyledButton onClick = { onClick }>
					{ children }
			</StyledButton>
	)
}

// Style CSS
const StyledButton = styled.button`
	margin-bottom: 1rem;
	border-radius: 25px;
`

// Typechecking
//Button.propTypes = {
//	onClick: PropTypes.func.isRequired
//}
