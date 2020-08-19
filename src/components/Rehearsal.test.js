import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Rehearsal from "./Rehearsal";
import renderer from "./rehearsalRenderer";

const pairs = [
  ["Dog", "Pies"],
  ["Cat", "Kot"],
  ["Fox", "Lis"],
  ["Mouse", "Mysz"],
  ["Fish", "Ryba"],
  ["Bird", "Ptak"],
  ["Snake", "Wąż"],
  ["Lion", "Lew"],
];

test("renders every pair", () => {
  const { getByText } = render(<Rehearsal pairs={pairs} render={renderer} />);

  pairs.forEach(([st, nd]) => {
    const first = getByText(st);
    const second = getByText(nd);
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
    userEvent.click(second);
  });
});
