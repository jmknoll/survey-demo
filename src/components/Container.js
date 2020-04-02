import React, { useEffect } from "react";
import Modal from "react-modal";
import { withCache, reducer, initialState } from "../reducer";
import * as actions from "../actions";
import { Row, Button } from "../ui";

import Identity from "./Identity";
import Details from "./Details";
import Favorites from "./Favorites";
import Summary from "./Summary";

const customStyles = {
  content: {
    top: "20%",
    left: "30%",
    bottom: "20%",
    right: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};

const Container = () => {
  const [state, dispatch] = React.useReducer(
    withCache(reducer),
    initialState
    // JSON.parse(localStorage.getItem("survey-state")) || initialState
  );

  useEffect(() => {
    setTimeout(() => {
      !state.surveyComplete && dispatch(actions.showSurvey(true));
    }, 2000);
  }, [false]);

  const sections = [Identity, Details, Favorites, Summary];
  const ActiveSection = sections[state.activeSurveySection];

  const validationMap = {
    1: ["age", "gender"],
    2: ["favoriteBook", "favoriteColors"]
  };

  const validateInputs = () => {
    const inputs = validationMap[state.activeSurveySection];
    const errors = inputs
      ? inputs
          .map(el =>
            state.surveyData[el] && state.surveyData[el].length ? null : el
          )
          .filter(el => el)
      : [];
    dispatch(
      !errors || errors.length === 0
        ? actions.setActiveSection(1)
        : actions.setErrors(errors)
    );
  };

  return (
    <Modal isOpen={state.surveyOpen} style={customStyles}>
      <ActiveSection
        dispatch={dispatch}
        surveyData={state.surveyData}
        errors={state.errors}
      />
      <Row justifyContent="space-between">
        <Button
          disabled={state.activeSurveySection === 0}
          onClick={() => {
            dispatch(actions.setActiveSection(-1));
          }}
        >
          Previous
        </Button>
        <Button
          disabled={state.activeSurveySection === sections.length - 1}
          onClick={() => {
            validateInputs();
          }}
        >
          Next
        </Button>
      </Row>
      {state.activeSurveySection === 3 && (
        <Row>
          <Button
            onClick={() => {
              dispatch(actions.submitSurvey());
            }}
          >
            Submit Survey
          </Button>
        </Row>
      )}
    </Modal>
  );
};

export default Container;
