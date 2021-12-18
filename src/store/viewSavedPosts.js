const initialState = false;

const TOGGLE_VIEW = "TOGGLE_VIEW";

export const toggleView = () => {
  return { type: TOGGLE_VIEW };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VIEW:
      return !state;
    default:
      return state;
  }
};
