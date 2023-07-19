export const Reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    let updatedCart = state.cartItems.map((currentElem) => {
      if (currentElem.id === action.payload) {
        return { ...currentElem, inStock: currentElem.inStock + 1 };
      }
      return currentElem;
    });
    const updatedCartItemsLength = state.cartItems.length + 1;
    return { ...state, cartItems: updatedCart, totalItem: updatedCartItemsLength };
  }
  
    if (action.type === "DECREMENT") {
      let updatedCart = state.cartItems
        .map((currentElem) => {
          if (currentElem.id === action.payload) {
            const updatedInStock = currentElem.inStock - 1;
            if (updatedInStock > 0) {
              return { ...currentElem, inStock: updatedInStock };
            }
            return null;
          }
          return currentElem;
        })
        .filter(Boolean);
  
      return { ...state, cartItems: updatedCart };
    }
  
    if (action.type === "GET_TOTAL") {
      let { totalItem, totalAmount } = state.cartItems.reduce(
        (accum, curVal) => {
          let { price, inStock } = curVal;
          let updatedTotalAmount = price * inStock;
          accum.totalAmount += updatedTotalAmount;
          accum.totalItem += inStock;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }
  
    return state;
  };
  