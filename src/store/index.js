import { createStore } from "redux";

const initialState = {
  lists: [
    {
      id: 1,
      name: "ブログを確認",
      complete: false,
    },
    {
      id: 2,
      name: "メールの返信",
      complete: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DONE_LIST":
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload) return list;
          return {
            ...list,
            complete: true,
          };
        }),
      };
    case "DONE_LISTS":
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload) return list;
          return {
            ...list,
            complete: false,
          };
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
