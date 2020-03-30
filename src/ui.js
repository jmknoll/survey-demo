import styled from "styled-components";
import { Button as LibButton } from "@smooth-ui/core-sc";
import { Dialog as LibDialog } from "reakit/Dialog";

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

export const Dialog = styled(LibDialog)`
  border: 1px solid #ccc;
  margin: 2rem auto;
  padding: 2rem;
`;
