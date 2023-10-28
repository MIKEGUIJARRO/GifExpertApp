import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Tests on <AddCategory />', () => {
    test('should change the value in the textbox', () => {
        const inputValue = 'saitama';

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } })
        // screen.debug();
        expect(input.value).toBe(inputValue);
    });

    test('should call onNewCategory fn if the input has a value', () => {
        const inputValue = 'saitama 2';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        // screen.debug();
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('should not call onNewCategory fn if the input is empty', () => {
        const inputValue = '   ';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(onNewCategory).not.toBeCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0)

    });
})