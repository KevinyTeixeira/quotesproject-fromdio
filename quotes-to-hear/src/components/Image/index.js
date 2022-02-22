import styled from 'styled-components'

export const Image = (speakerName) => {
	console.log(speakerName)
	if (speakerName === null) {
		speakerName = "index"
	}
	const imagePath = require("../../assets/img/" + "NapoleãoBonaparte" + ".jpg");
	return imagePath;
	}

// Style CSS
const StyledImage = styled.img`

`
