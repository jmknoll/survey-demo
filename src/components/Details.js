import React from "react";
import {
  FormField,
  FormFieldLabel,
  Select,
  Radio,
  RadioGroup,
  Boxer,
  Box
} from "@smooth-ui/core-sc";

import * as actions from "../actions";

const Details = props => {
  let ageData = [];
  for (let i = 0; i < 100; i++) {
    ageData.push({ value: i, name: i });
  }
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "not-specified", label: "Other / Not Specified" }
  ];

  const updateGender = (name, val) => {
    props.dispatch(actions.updateFormField(name, val));
  };
  return (
    <Box>
      <FormField>
        <FormFieldLabel name="Age">Age</FormFieldLabel>
        <Select
          onChange={event => {
            props.dispatch(
              actions.updateFormField(event.target.name, event.target.value)
            );
          }}
          name="age"
          type="number"
          value={props.surveyData.age}
        >
          {ageData.map((age, key) => {
            return (
              <option key={key} value={age.value}>
                {age.name}
              </option>
            );
          })}
        </Select>
      </FormField>

      <FormField>
        <RadioGroup name="gender" aria-label="gender">
          <Boxer my={2}>
            <FormFieldLabel name="Age">Gender</FormFieldLabel>
            {genders.map((gender, key) => (
              <label>
                <Radio
                  checked={props.surveyData.gender === gender.value}
                  value={gender.value}
                  name="gender"
                  onChange={e => {
                    updateGender(e.target.name, e.target.value);
                  }}
                />{" "}
                {gender.label}
              </label>
            ))}
          </Boxer>
        </RadioGroup>
      </FormField>
    </Box>
  );
};

export default Details;
