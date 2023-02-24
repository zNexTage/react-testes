import { fireEvent, render, screen } from "@testing-library/react";
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
});