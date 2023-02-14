import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import useListParticipants from "../../state/hooks/useListParticipants";
import Raffle from "./raffle";


jest.mock('../../state/hooks/useListParticipants');

describe("Raffle page", () => { //Página de sorteio
    const participants = [
        'Enya',
        'Takai',
        'Roberta'
    ]

    beforeEach(() => {
        (useListParticipants as jest.Mock).mockReturnValue(participants)
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
});