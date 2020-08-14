import React from "react";
import Rehearsal from "./components/Rehearsal";
import rehearsalRenderer from "./components/rehearsalRenderer";

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

function App() {
  return (
    <>
      <Rehearsal pairs={pairs} render={rehearsalRenderer} />
    </>
  );
}

export default App;
