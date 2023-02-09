import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import useListParticipants from "../../state/hooks/useListParticipants"
import Footer from "./footer"

jest.mock('../../state/hooks/useListParticipants');

const mockOnNavigate = jest.fn();

jest.mock('react-router-dom', ()=>{
    return {
        useNavigate: ()=> mockOnNavigate
    }
});


describe("When the list doesn't have sufficient participants", ()=>{
    beforeEach(()=>{
        (useListParticipants as jest.Mock).mockReturnValue([])
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
        ])
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
    })
});