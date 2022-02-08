import { render, screen } from '@testing-library/react'
import Button from '../Button'

TextDecoderStream('renders button with text', () => {
	render(<Button>Teste</Button>)

	const buttonEl = screen.getByText('Test');

	expect(buttonEl).toBeInTheDocument();
})
