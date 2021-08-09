import { CREATE_EVENT, DELEATE_ALL_EVENTS, DELEATE_EVENT } from "../actions";

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELEATE_EVENT:
      return state.filter(event=>event.id !== action.id )
    case DELEATE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
