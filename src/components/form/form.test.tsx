import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Form from './form';

//Jest
describe('Form component', ()=>{

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
    
    test('duplicate names cannot be added to the list', ()=>{
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );
    
        //Find in DOM the input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        //Find the button
        const button = screen.getByRole('button');
    
        // Added Fernanda Takai to the list
        // Input value
        fireEvent.change(input, { target: { value: 'Fernanda Takai' } });
    
        // Submit form
        fireEvent.click(button);
    
        // Try to add Fernanda Takai to the list again; must be fail, we don't want duplicata name.
    
        // Input value
        fireEvent.change(input, { target: { value: 'Fernanda Takai' } });
        
        // Submit form
        fireEvent.click(button);
    
        const errorMessage = screen.getByRole('alert');
    
        expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos');
    });
    
    test('error message should disappear after 5 seconds', ()=> {
        /**
         * Fake timers will swap out Date, performance.now(), queueMicrotask(), setImmediate(), clearImmediate(), setInterval(), clearInterval(), setTimeout(), clearTimeout() with an implementation that gets its time from the fake clock.
         * 
         * Ref: https://jestjs.io/docs/jest-object#fake-timers
         */
        jest.useFakeTimers();
    
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );
    
        //Find in DOM the input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        //Find the button
        const button = screen.getByRole('button');
    
        // Added Fernanda Takai to the list
        // Input value
        fireEvent.change(input, { target: { value: 'Fernanda Takai' } });
    
        // Submit form
        fireEvent.click(button);
    
        // Try to add Fernanda Takai to the list again; must be fail, we don't want duplicata name.
    
        // Input value
        fireEvent.change(input, { target: { value: 'Fernanda Takai' } });
        
        // Submit form
        fireEvent.click(button);
    
        let errorMessage = screen.queryByRole('alert');
    
        expect(errorMessage).toBeInTheDocument();
    
        /**
         * when there are state updates to be made during the tests, they need to be inside the act function, like this:
         */
        act(() => {
            jest.runAllTimers()
        });
    
        errorMessage = screen.queryByRole('alert');
        expect(errorMessage).toBe(null);
    });
})