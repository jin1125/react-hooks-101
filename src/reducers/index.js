const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { titile: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case "DELEATE_EVENT":
      return state;
    case "DELEATE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
