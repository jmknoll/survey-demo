import React from "react";
import { FormField, FormFieldLabel, Input, Box } from "@smooth-ui/core-sc";

import * as actions from "../actions";

const Identity = props => {
  return (
    <Box>
      <FormField>
        <FormFieldLabel name="name">Name</FormFieldLabel>
        <Input
          onChange={event => {
            props.dispatch(
              actions.updateFormField(event.target.name, event.target.value)
            );
          }}
          name="name"
          type="text"
          placeholder="Name"
          value={props.surveyData.name}
        />
      </FormField>
      <FormField>
        <FormFieldLabel name="email">Email</FormFieldLabel>
        <Input
          onChange={event => {
            props.dispatch(
              actions.updateFormField(event.target.name, event.target.value)
            );
          }}
          name="email"
          type="email"
          placeholder="Email"
          value={props.surveyData.email}
        />
      </FormField>
    </Box>
  );
};

export default Identity;
