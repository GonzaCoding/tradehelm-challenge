import React from "react";
import {render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";

import ItemList from "./ItemList";

describe("<ItemList /> spec", () => {
  it("Render component", () => {
    let component;

    act(() => {
      render(<ItemList />), component;
    });

    expect(component).toMatchSnapshot();
  });

  it("Have button", () => {
    render(<ItemList />);

    const addButtonElement = screen.getByText(/Add item/i);

    expect(addButtonElement).toBeInTheDocument();
  });
});
