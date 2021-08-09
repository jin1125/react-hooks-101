import React, { useContext } from "react";

import {DELEATE_EVENT} from '../actions/index.js';
import AppContext from "../contexts/AppContext.js";

const Event = ({event}) => {
  const {dispatch} = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id = ${id})を本当に削除しても良いですか？`);
    if(result){
      dispatch({ type: DELEATE_EVENT, id: id });
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;