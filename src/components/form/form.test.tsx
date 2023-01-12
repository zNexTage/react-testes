import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Form from './form';

//Jest
test('when the input is empty, new participants cannot be added', () => {
    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>
    );

    //Find in DOM the input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    //Find the button
    const button = screen.getByRole('button');

    //checks if input is in document
    expect(input).toBeInTheDocument();

    //checks if button is disabled.
    expect(button).toBeDisabled();
});

test('add a new participants when the participant name field is not blank', () => {
    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>
    );

    //Find in DOM the input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    //Find the button
    const button = screen.getByRole('button');

    // Input value
    fireEvent.change(input, { target: { value: 'Fernanda Takai' } });

    // Submit form
    fireEvent.click(button);

    // Clean input
    expect(input).toHaveValue('');

    // Focus in input
    expect(input).toHaveFocus();
});