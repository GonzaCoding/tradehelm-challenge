import React from "react";
import {render} from "@testing-library/react";

import Item from "./Item";
import {ItemType} from "./types";

const mockItem: ItemType = {
  title: "Mock item",
};

describe("<Item /> spec", () => {
  it("Render component", () => {
    const onDelete = jest.fn();

    const component = render(<Item item={mockItem} itemIndex={1} onDelete={onDelete} />);

    expect(component).toMatchSnapshot();
  });
});
