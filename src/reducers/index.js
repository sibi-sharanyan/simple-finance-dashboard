import { combineReducers } from "redux";

const modalReducer = (state = false, action) => {
  if (action.type === "HIDE_MODAL") {
    return false;
  } else if (action.type === "SHOW_MODAL") {
    return action.payload;
  }
  return state;
};

const modalSpecsReducer = (
  state = {
    titleBG: "bg-primary",
    status: "Buy"
  },
  action
) => {
  if (action.type === "BUY") {
    return {
      titleBG: action.payload.titleColor,
      status: "Buy"
    };
  } else if (action.type === "SELL") {
    return {
      titleBG: action.payload.titleColor,
      status: "Sell"
    };
  }
  return state;
};

const counterReducer = (state = 1, action) => {
  if(action.type ===  'CHANGE_COUNTER') {
    return action.payload.cnt; 
  }
  return state

};

export default combineReducers({
  modalStatus: modalReducer,
  modalSpecs: modalSpecsReducer,
  counter: counterReducer
});
