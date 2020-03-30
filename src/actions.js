export const showSurvey = show => {
  return {
    type: "SHOW_SURVEY",
    data: {
      show
    }
  };
};

export const setActiveSection = modifier => {
  return {
    type: "SET_ACTIVE_SECTION",
    data: {
      modifier
    }
  };
};

export const updateFormField = (fieldName, fieldValue) => {
  return {
    type: "UPDATE_FORM_FIELD",
    data: {
      fieldName,
      fieldValue
    }
  };
};

export const submitSurvey = () => {
  console.log("submitting");
  return {
    type: "SUBMIT_SURVEY"
  };
};
