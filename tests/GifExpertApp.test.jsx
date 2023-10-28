import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Test in <GifExpertApp />', () => {

    test('should match the snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
        //screen.debug();
    });

    test('should show the h1 title', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('Gif Export App'));
        //screen.debug();
    });

    test('should add a category title when form is filled and sent and in loading state', () => {
        const inputValue = 'One Punch Man';
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        expect(screen.getByText(inputValue));
        expect(screen.getByText('Is loading...'));
    });
});