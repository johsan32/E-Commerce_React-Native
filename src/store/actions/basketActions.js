import {
  FETCH_ADD_BASKET,
  ADD_BASKET_PENDING,
  ADD_BASKET_REJECT,
  REMOVE_FROM_BASKET,
  MINUS_AMOUNT,
  PLUS_AMOUNT
} from '../types/basketTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToBasket = item => {
  return async (dispatch) => {
    dispatch({type: ADD_BASKET_PENDING});
   
    try {
      await AsyncStorage.setItem('basket', JSON.stringify(item));
      dispatch({type: FETCH_ADD_BASKET,
      payload:item,

      });
      console.log("itemactions", item)
    } catch (error) {
      dispatch({type: ADD_BASKET_REJECT});
    }
  };
};


export const plusAmount = item => {
  return async dispatch => {
    dispatch({ type: ADD_BASKET_PENDING });

    try {
      await AsyncStorage.setItem('basket', JSON.stringify(item));
      dispatch({ type: PLUS_AMOUNT, payload: item });
    } catch (error) {
      dispatch({ type: ADD_BASKET_REJECT });
    }
  };
};
export const minusAmount = item => {
  return async dispatch => {
    dispatch({ type: ADD_BASKET_PENDING });

    try {
      await AsyncStorage.setItem('basket', JSON.stringify(item));
      dispatch({ type: MINUS_AMOUNT, payload: item });
    } catch (error) {
      dispatch({ type: ADD_BASKET_REJECT });
    }
  };
};

export const deleteProduct = item => {
  return async dispatch => {
dispatch({ type: ADD_BASKET_PENDING });

    try {
      await AsyncStorage.setItem('basket', JSON.stringify(item));
      dispatch({ type: REMOVE_FROM_BASKET, payload: item });
      console.log("remm");

    } catch (error) {
      dispatch({ type: ADD_BASKET_REJECT });
      console.log("erere");
    }
  };
};



export const removeFromBasket = item => {
  return async dispatch => {
    dispatch({ type: ADD_BASKET_PENDING });

    try {
      await AsyncStorage.setItem('basket', JSON.stringify(item));
      dispatch({ type: REMOVE_FROM_BASKET, payload: item });
          console.log("remm");
    } catch (error) {
      dispatch({ type: ADD_BASKET_REJECT });
      console.log("erere");
    }
  };
};

export const checkBasket = () => {
  return async dispatch => {
    dispatch({type: ADD_BASKET_PENDING});
    try {
      const basket = await AsyncStorage.getItem('basket');
      if (basket) {
        dispatch({type: FETCH_ADD_BASKET, payload: JSON.parse()});
      } else {
        dispatch({type: ADD_BASKET_REJECT});
      }
    } catch (error) {
      dispatch({type: ADD_BASKET_REJECT});
    }
  };
};
