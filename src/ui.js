import React from "react";
import styled from "styled-components";
import { Button as LibButton, Text, Box } from "@smooth-ui/core-sc";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.justifyContent};
  margin: 10px 0;
`;

export const Button = styled(LibButton)`
  flex: 1;
  margin: 0 5px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const ErrorText = styled(Text)`
  color: rgb(220, 53, 69);
`;

export const Error = props => (
  <Box my={2}>
    <ErrorText>{props.children}</ErrorText>
  </Box>
);
