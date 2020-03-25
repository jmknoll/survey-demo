import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "@smooth-ui/core-sc";

import { StateProvider } from "./providers/StateProvider";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <Container></Container>
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
