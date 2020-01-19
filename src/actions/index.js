export const hideModal = () => {
  return {
    type: "HIDE_MODAL"
  };
};

export const showModal = (payload) => {
  return {
    type: "SHOW_MODAL",
    payload 
  };
};

export const toggleBuy = isBuy => { 
  if (isBuy) {
    return {
      type: "BUY",
      payload: {
        titleColor: "bg-primary"
      }
    };
  } else {
    return {
      type: "SELL" ,
      payload: {
        titleColor: "bg-danger"
      }
    };
  }
};

export const changeCounter = (cnt) => {
  return {
    type: "CHANGE_COUNTER" , 
    payload: {
      cnt
    }
  }
}