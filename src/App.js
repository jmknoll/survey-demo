import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, Normalize } from "@smooth-ui/core-sc";

import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
