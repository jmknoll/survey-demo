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
    JSON.parse(localStorage.getItem("survey-state")) || initialState
  );

  useEffect(() => {
    setTimeout(() => {
      !state.surveyComplete && dispatch(actions.showSurvey(true));
    }, 2000);
  }, [false]);

  // useEffect(() => {
  //   // hydrate
  // }, [false]);

  const sections = [Identity, Details, Favorites, Summary];
  const ActiveSection = sections[state.activeSurveySection];

  return (
    <Modal isOpen={state.surveyOpen} style={customStyles}>
      <ActiveSection dispatch={dispatch} surveyData={state.surveyData} />
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
            dispatch(actions.setActiveSection(1));
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
