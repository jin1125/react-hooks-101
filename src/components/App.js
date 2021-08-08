import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";
import AppContext from "../contexts/AppContext.js";
import reducer from "../reducers/index.js";
import EventForm from "./EventForm";
import Events from "./Events";

console.log(AppContext);

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={'Hello,I am a Provider.'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
