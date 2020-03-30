import React from "react";
import { FormFieldLabel, Separator } from "@smooth-ui/core-sc";
import styled from "styled-components";
import { capitalize } from "../utils";

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const TableCell = styled.div``;

const Summary = props => {
  return (
    <>
      <FormFieldLabel>Your Information</FormFieldLabel>
      <Separator />
      <TableRow>
        <TableCell>Name:</TableCell>
        <TableCell>{props.surveyData.name || "N/A"}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Email:</TableCell>
        <TableCell>{props.surveyData.email || "N/A"}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Age:</TableCell>
        <TableCell>{props.surveyData.age}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Gender:</TableCell>
        <TableCell>
          {props.surveyData.gender && capitalize(props.surveyData.gender)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Age:</TableCell>
        <TableCell>
          {props.surveyData.favoriteBook &&
            capitalize(props.surveyData.favoriteBook)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Favorite Colors:</TableCell>
        <TableCell>
          {props.surveyData.favoriteColors &&
            props.surveyData.favoriteColors.map(
              (color, index) =>
                capitalize(color) +
                (index === props.surveyData.favoriteColors.length - 1
                  ? ""
                  : ", ")
            )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Summary;
