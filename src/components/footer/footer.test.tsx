import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "./footer"

describe("When the list doesn't have sufficient participants", ()=>{
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