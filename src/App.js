import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LeftComponent } from "./LeftComponent";
import { RightComponent } from "./RightComponent";
import styled from "styled-components";

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
    <SAppContainer>
      <SAppWrapper>
        <LeftComponent
          lists={leftLists}
          onClick={() => {
            toRight(leftLists.slice(-1)[0].name);
          }}
        />
        <RightComponent
          lists={rightLists.reverse()}
          onClick={() => {
            toLeft(rightLists.slice(-1)[0].name);
          }}
        />
      </SAppWrapper>
    </SAppContainer>
  );
}

export default App;

const SAppContainer = styled.div`
  width: 700px;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  height: 100vh;
  overflow: scroll;
`;

const SAppWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
