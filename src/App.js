import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const doneList = (name) => {
    dispatch({ type: "DONE_LIST", payload: name });
  };
  const doneLists = (name) => {
    dispatch({ type: "DONE_LISTS", payload: name });
  };

  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => (
            <div key={index}>
              {list.name}
              <button onClick={() => doneList(list.name)}>完了</button>
            </div>
          ))}
      </ul>
      <h2>完了したTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === true)
          .map((list, index) => (
            <div key={index}>
              {list.id}
              {list.name}
              <button onClick={() => doneLists(list.name)}>完了</button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
