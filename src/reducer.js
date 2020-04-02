const initialState = {
  surveyOpen: false,
  surveyComplete: false,
  activeSurveySection: 0,
  surveyData: {
    name: "",
    email: "",
    age: null,
    gender: null,
    favoriteBook: "",
    favoriteColors: []
  },
  errors: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SURVEY":
      return {
        ...state,
        surveyOpen: action.data.show
      };
    case "SET_ACTIVE_SECTION":
      return {
        ...state,
        activeSurveySection: state.activeSurveySection + action.data.modifier
      };
    case "UPDATE_FORM_FIELD":
      return {
        ...state,
        surveyData: {
          ...state.surveyData,
          [action.data.fieldName]: action.data.fieldValue
        }
      };
    case "SUBMIT_SURVEY":
      return {
        ...state,
        surveyComplete: true,
        surveyOpen: false
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.data.errorFields
      };
    default:
      return state;
  }
};

const withCache = reducer => {
  return (state, action) => {
    const newState = reducer(state, action);
    localStorage.setItem("survey-state", JSON.stringify(newState));
    return newState;
  };
};

export { withCache, reducer, initialState };
