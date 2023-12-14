import { render,screen } from "@testing-library/react";
import Signup from "./Signup";

describe( 'Login component', () => { 
    test('renders Login heading text',() => {
        render(<Signup />);
    
        const outputElement = screen.getByText('Login')
        expect(outputElement).toBeInTheDocument();
    })
    
    test('renders Your Email heading text',() => {
        render(<Signup />);
    
        const outputElement = screen.getByText('Your Email')
        expect(outputElement).toBeInTheDocument();
    })
    
    test('renders Your Password heading text',() => {
        render(<Signup />);
    
        const outputElement = screen.getByText('Your Password')
        expect(outputElement).toBeInTheDocument();
    })
    test('renders Login button', () => {
        render(<Signup />);

        const textElement = screen.getByText('Login');
        expect(textElement).toBeInTheDocument();
    })
    test('render Forgot password', () => {
        const textElement = screen.getByText('Forgot Password?');
        expect(textElement).toBeInTheDocument();
    })
})
