const initialState = [
  { id: 0, name: "popular" },
  { id: 1, name: "suggestmeabook" },
  { id: 2, name: "Foodforthought" },
  { id: 3, name: "hiphopheads" },
  { id: 4, name: "YouShouldKnow" },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
