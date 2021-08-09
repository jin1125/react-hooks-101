import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useReducer } from "react";
import AppContext from "../contexts/AppContext.js";
import reducer from "../reducers/index.js";
import OperationLogs from "./OperationLogs";
import EventForm from "./EventForm";
import Events from "./Events";

const App_KEY = 'appWithRedux';

const App = () => {
 const appState =  localStorage.getItem(App_KEY)

  const initialState = appState ? JSON.parse(appState) : {
    events:[],
    operationLogs:[]
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
   localStorage.setItem(App_KEY,JSON.stringify(state))
  },[state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
