import React, { createContext, useEffect, useReducer } from 'react';
import ContextCart from './ContextCart';
import { useSelector } from 'react-redux';
import { Reducer } from '../Utils/Reducer';
import EmptyCart from './EmptyCart';
import { removeItem } from '../Utils/CartSlice';

export const CartContext = createContext();

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.menuItems);
  const initialState = {
    cartItems: cartItems,
    totalAmount: 0,
    totalItem: 0,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const increment = (id) => {
    return dispatch({
      type: 'INCREMENT',
      payload: id,
    });

  };

  const decrement = (id) => {
    return dispatch({
      type: 'DECREMENT',
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    localStorage.setItem('TotalCartValue', initialState.totalItem);
  }, [state.cartItems]);

  if (state.totalItem === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <CartContext.Provider value={{ ...state, increment, decrement }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;