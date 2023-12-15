import { render, screen } from "@testing-library/react";
import Readmessage from "./Readmessage";

describe('read message testing', () => {
    test('render delete as a text', () => {
        render(<Readmessage />);

        const textElement = screen.getByText('Delete');
        expect(textElement).toBeInTheDocument();
    })
    test('render button as a role', () => {
        render(<Readmessage />);

        const textElement = screen.getByRole('Delete');
        expect(textElement).toBeInTheDocument();
    })
})
