import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from './form';

//Jest
test('when the input is empty, new participants cannot be added', ()=>{
    render(<Form />);
    
    //Find in DOM the input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    //Find the button
    const button = screen.getByRole('button');

    //checks if input is in document
    expect(input).toBeInTheDocument();

    //checks if button is disabled.
    expect(button).toBeDisabled();
});
