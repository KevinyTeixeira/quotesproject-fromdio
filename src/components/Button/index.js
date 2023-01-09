import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = (props) => {

	const { children, onClick } = props;

	return (
		<StyledButton onClick = { onClick }>
			{ children }
		</StyledButton>
	)
}

// Style CSS
const StyledButton = styled.button`
	background: white;
	border: none;
	border-radius: 10px;
	font-size: 1.2em;
	padding: 10px 20px;
	cursor: pointer;
	box-shadow: #333 3px 3px;
	margin-bottom: 1rem;
	transition: 0.5s;

	&:hover {
		transition: 0.5s;
		background: black;
		color: white;
	}
`

// Typechecking
// Button.propTypes = {
//	onClick: PropTypes.func.isRequired
//	}
