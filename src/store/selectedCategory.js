const initialState = "suggestmeabook";

const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export const changeSelectedCategory = (category) => {
  return { type: CHANGE_CATEGORY, category };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      const { category } = action;
      return category;
    default:
      return state;
  }
};
