import { render, screen } from "@testing-library/react";
import Quotes from "./Quotes";
import Welcome from "./Welcome";
import Calculator from "./Calculator";

describe(" testing components", () => {
  test("testing landing page", () => {
    const landing = render(<Welcome />);
    expect(landing).toMatchSnapshot();
  });
  test("testing Quote Page", async () => {
    render(<Quotes />);
    const button = await screen.findAllByRole("button");
    expect(button).toHaveLength(1);
  });
  test("testing calculator page", async () => {
    render(<Calculator />);
    const btn = await screen.findAllByRole("button");
    expect(btn).toHaveLength(19);
  });
});
