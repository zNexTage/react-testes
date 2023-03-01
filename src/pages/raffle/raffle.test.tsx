import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import useListParticipants from "../../state/hooks/useListParticipants";
import useSorterResult from "../../state/hooks/useSorterResult";
import Raffle from "./raffle";


jest.mock('../../state/hooks/useListParticipants');
jest.mock('../../state/hooks/useSorterResult');



describe("Raffle page", () => { //Página de sorteio
    const participants = [
        'Enya',
        'Takai',
        'Roberta'
    ]

    const result = new Map([
        ['Enya', 'Takai'],
        ['Takai', 'Roberta'],
        ['Roberta', 'Enya'],
    ])

    beforeEach(() => {
        (useListParticipants as jest.Mock).mockReturnValue(participants);
        (useSorterResult as jest.Mock).mockReturnValue(result);
    })

    test("All participants can show your secret friendly", () => {

        render(
            <RecoilRoot>
                <Raffle />
            </RecoilRoot>
        )

        const options = screen.queryAllByRole("option");

        expect(options).toHaveLength(3);
    })

    test("The secret friend is displayed when requested", ()=>{
        render(
            <RecoilRoot>
                <Raffle />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText("Selecione o seu nome");

        fireEvent.change(select, {
            target:{
                value: participants[0]
            }
        });

        const button = screen.getByRole("button");

        fireEvent.click(button);

        const secretFriend = screen.getByRole("alert");

        expect(secretFriend).toBeInTheDocument();
    })

    test("The secret friend name should disapper after 5 seconds", async ()=>{
        jest.useFakeTimers();

        render(
            <RecoilRoot>
                <Raffle />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText("Selecione o seu nome");

        fireEvent.change(select, {
            target:{
                value: participants[0]
            }
        });

        
        const button = screen.getByRole("button");
        
        act(()=>{
            fireEvent.click(button);

            //Before runAllTimers the secret friend name should be in page
            jest.runAllTimers();
        });
        
        // Check if the secret name has removed from DOM
        await waitFor(()=> expect(screen.queryByRole("alert")).not.toBeInTheDocument());
    })
});