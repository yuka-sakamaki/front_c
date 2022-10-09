import { createStore } from "redux";

const initialState = {
  lists: [
    {
      name: "Apple",
      isLeft: true,
      id: 1,
    },
    {
      name: "Grape",
      isLeft: true,
      id: 2,
    },
    {
      name: "Strawberry",
      isLeft: true,
      id: 3,
    },
    {
      name: "Cherry",
      isLeft: true,
      id: 4,
    },
    {
      name: "Plum",
      isLeft: true,
      id: 5,
    },
    {
      name: "Peach",
      isLeft: false,
      id: 6,
    },
    {
      name: "Banana",
      isLeft: false,
      id: 7,
    },
    {
      name: "Watermelon",
      isLeft: false,
      id: 8,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LEFT_LIST":
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload) return list;
          return {
            ...list,
            isLeft: true,
          };
        }),
      };
    case "RIGHT_LIST":
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload) return list;
          return {
            ...list,
            isLeft: false,
          };
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
