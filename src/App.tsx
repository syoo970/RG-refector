import React from "react";
import Button from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    rg: true;
  }
}

function App() {
  return (
    <>
      <Button color="primary">df</Button>
      <Button color="rg">test</Button>
    </>
  );
}

export default App;
