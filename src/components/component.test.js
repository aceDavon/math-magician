import { render } from "@testing-library/react";
import Quotes from "./Quotes";
import Welcome from "./Welcome";
import Calculator from "./Calculator";

describe( " testing components", () => {
    test('testing landing page', () => {
        const landing = render(<Welcome />);
        expect(landing).toMatchSnapshot()

    })
    test('testing Quote Page', () => {
        const quotes = 
    })
})

