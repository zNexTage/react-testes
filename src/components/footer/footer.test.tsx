const mockOnNavigate = jest.fn();
const mockSorter = jest.fn();

import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import useListParticipants from "../../state/hooks/useListParticipants"
import useSorter from "../../state/hooks/useSorter";
import Footer from "./footer"

jest.mock('../../state/hooks/useListParticipants');

jest.mock('react-router-dom', ()=>{
    return {
        useNavigate: ()=> mockOnNavigate
    }
});


jest.mock('../../state/hooks/useSorter');


describe("When the list doesn't have sufficient participants", ()=>{
    beforeEach(()=>{
        (useListParticipants as jest.Mock).mockReturnValue([]);
        (useSorter as jest.Mock).mockReturnValue(mockSorter);
    })

    test("can't start secret friends giveaway", ()=>{
        
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    })    
})

describe("When the list have sufficient participants", ()=>{
    beforeEach(()=>{
        (useListParticipants as jest.Mock).mockReturnValue([
            'Enya',
            'Juliana',
            'Takai'
        ]);
        
        (useSorter as jest.Mock).mockReturnValue(mockSorter);
    })

    test("can start secret friends giveaway", ()=>{
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button');

        expect(button).toBeEnabled();
    })

    test("the secret friends giveaway has beginning", ()=>{
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole('button');
        
        fireEvent.click(button);

        expect(mockOnNavigate).toHaveBeenCalledTimes(1);
        expect(mockOnNavigate).toHaveBeenCalledWith("/sorteio");

        expect(mockSorter).toHaveBeenCalledTimes(1);
    })
});