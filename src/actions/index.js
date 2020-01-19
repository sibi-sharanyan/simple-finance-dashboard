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

export const toggleBuy = obj => { 
  if (obj.status === true) {
    return {
      type: "BUY",
      payload: {
        titleColor: "bg-primary",
        quantity: 1
        
      }
    };
  } else {
    console.log('Works' , obj.quantity);
    return {
      type: "SELL" ,
      payload: {
        titleColor: "bg-danger",
        quantity: obj.quantity
      }
    };
  }
};

export const changeCounter = (cnt) => {
  return {
    type: "CHANGE_COUNTER" , 
    payload: {
      quantity: cnt
    }
  }
}