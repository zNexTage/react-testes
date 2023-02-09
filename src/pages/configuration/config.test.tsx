import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Configuration from "./configuration";


jest.mock('react-router-dom');

describe("A configuration page", ()=>{
    test("Should be rendered", ()=>{
        const {container} = render(
            <RecoilRoot>
                <Configuration />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot();
    });
});