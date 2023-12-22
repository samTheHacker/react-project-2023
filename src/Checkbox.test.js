import { render, fireEvent, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox will change value to true", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = screen.getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})