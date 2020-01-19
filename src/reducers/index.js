import { combineReducers } from "redux";

const modalReducer = (state = false, action) => {
  if (action.type === "HIDE_MODAL") {
    console.log("Modal Hide")
    return false;
  } else if (action.type === "SHOW_MODAL") {
    return action.payload;
  }
  return state;
};

const modalSpecsReducer = (
  state = {
    titleBG: "bg-primary",
    status: "Buy",
    quantity: 1
  },
  action
) => {
  if (action.type === "BUY") {
    return {
      titleBG: action.payload.titleColor,
      status: "Buy",
      quantity: action.payload.quantity
    };
  } else if (action.type === "SELL") {
    console.log("this" + action.payload.quantity);
    return {
      titleBG: action.payload.titleColor,
      status: "Sell",
      quantity: action.payload.quantity 
    };
  } else if (action.type === "CHANGE_COUNTER") {
    console.log('changecounter' + action.payload.quantity)
    return {
      ...state,
      quantity: action.payload.quantity
    };
  }else if((action.type === "HIDE_MODAL")) {
    return {
      titleBG: "bg-primary",
      status: "Buy",
      quantity: 1
    }
  }
  else {
    return state;

  }
};

export default combineReducers({
  modalStatus: modalReducer,
  modalSpecs: modalSpecsReducer
});
