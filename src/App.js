import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { LeftComponent } from "./LeftComponent";
import { RightComponent } from "./RightComponent";

function App() {
  const lists = useSelector((state) => state.lists);
  const leftLists = lists.filter((lists) => lists.isLeft === true);
  const rightLists = lists.filter((lists) => lists.isLeft === false);
  const dispatch = useDispatch();
  const toLeft = (name) => {
    dispatch({ type: "LEFT_LIST", payload: name });
  };
  const toRight = (name) => {
    dispatch({ type: "RIGHT_LIST", payload: name });
  };

  return (
    <div className="App">
      <LeftComponent
        lists={leftLists}
        onClick={() => {
          toRight(leftLists.slice(-1)[0].name);
        }}
      />
      <RightComponent
        lists={rightLists}
        onClick={() => {
          toLeft(rightLists.slice(-1)[0].name);
        }}
      />
    </div>
  );
}

export default App;
