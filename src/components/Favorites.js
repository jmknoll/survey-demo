import React from "react";
import {
  FormField,
  FormFieldLabel,
  Input,
  Box,
  Boxer,
  Checkbox
} from "@smooth-ui/core-sc";
import * as actions from "../actions";
import { capitalize } from "../utils";

const Favorites = props => {
  const colors = ["red", "green", "blue", "yellow"];

  const selectColor = color => {
    const colorIndex = props.surveyData.favoriteColors.indexOf(color);
    const favoriteColors =
      colorIndex === -1
        ? [...props.surveyData.favoriteColors, color]
        : [
            ...props.surveyData.favoriteColors.slice(0, colorIndex),
            ...props.surveyData.favoriteColors.slice(colorIndex + 1)
          ];
    props.dispatch(actions.updateFormField("favoriteColors", favoriteColors));
  };

  return (
    <Box>
      <FormField>
        <FormFieldLabel name="favoriteBook">Favorite Book</FormFieldLabel>
        <Input
          onChange={event => {
            props.dispatch(
              actions.updateFormField(event.target.name, event.target.value)
            );
          }}
          name="favoriteBook"
          type="text"
          placeholder="Favorite Book"
          value={props.surveyData.favoriteBook}
        />
      </FormField>
      <FormField>
        <FormFieldLabel name="Age">Favorite Color</FormFieldLabel>
        <Boxer my={1}>
          {colors.map((color, key) => (
            <label key={key}>
              <Checkbox
                checked={props.surveyData.favoriteColors.includes(color)}
                onChange={() => {
                  selectColor(color);
                }}
              />{" "}
              {capitalize(color)}
            </label>
          ))}
        </Boxer>
      </FormField>
    </Box>
  );
};

export default Favorites;
