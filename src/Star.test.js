import { render, screen } from "@testing-library/react";
import { Star } from "./Star";

test("Render a h1", () => {
    const { getByText } = render(<Star />);
    const h1 = screen.getByText(/Cool Star/); 
    expect(h1).toHaveTextContent("Cool Star");
})