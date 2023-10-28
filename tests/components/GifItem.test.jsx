import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Tests on <GifItem />', () => {
    const title = 'Saitama';
    const url = 'https://one-punch/saitama.jpg'
    test('should match the snapshot', () => {
        const { container } = render(<GifItem id={'1234'} title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('should show the URL image and the ALT indicated', () => {
        render(<GifItem id={'1234'} title={title} url={url} />)
        //screen.debug()
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
    test('should show the title in the component', () => {
        render(<GifItem id={'1234'} title={title} url={url} />);
        const text = screen.getByText(title);
        expect(text).toBeTruthy();
    });
});