import React from 'react'
import styled from 'styled-components'
import Speaker from '../../assets/img/mlk.jpg';

const Image = () => {

	return (
		<StyledImage className = "" src = { Speaker } alt = "A Big Man in the world!" />
	)
}

// Style CSS
const StyledImage = styled.img`
	height: 100vh;
	width: 100vw;
`
export default Image;
