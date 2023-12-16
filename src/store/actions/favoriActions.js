import {
FETCH_ADD_FAVORITE,
ADD_FAVORITE_PENDING,
ADD_FAVORITE_REJECT,
REMOVE_FROM_FAVORITE

} from '../types/favoriteTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToFavorite = item => {
  return async (dispatch, getState) => {
    dispatch({type: ADD_FAVORITE_PENDING});
   
    try {
      await AsyncStorage.setItem('favorite', JSON.stringify(item));
      dispatch({type: FETCH_ADD_FAVORITE,
      payload:item,

      });
      console.log("itemactions", item)
    } catch (error) {
      dispatch({type: ADD_FAVORITE_REJECT});
    }
  };
};


export const deleteFavorite = item => {
  return async dispatch => {
dispatch({ type: ADD_FAVORITE_PENDING});

    try {
      await AsyncStorage.setItem('favorite', JSON.stringify(item));
      dispatch({ type: REMOVE_FROM_FAVORITE, payload: item });
      console.log("remm");

    } catch (error) {
      dispatch({ type: ADD_FAVORITE_REJECT });
      console.log("erere");
    }
  };
};



// export const removeFromBasket = item => {
//   return async dispatch => {
//     dispatch({ type: ADD_BASKET_PENDING });

//     try {
//       await AsyncStorage.setItem('basket', JSON.stringify(item));
//       dispatch({ type: REMOVE_FROM_BASKET, payload: item });
//           console.log("remm");
//     } catch (error) {
//       dispatch({ type: ADD_BASKET_REJECT });
//       console.log("erere");
//     }
//   };
// };

export const checkFavorite = () => {
  return async dispatch => {
    dispatch({type: ADD_FAVORITE_PENDING});
    try {
      const basket = await AsyncStorage.getItem('favorite');
      if (favorite) {
        dispatch({type: FETCH_ADD_FAVORITE, payload: JSON.parse()});
      } else {
        dispatch({type: ADD_FAVORITE_REJECT});
      }
    } catch (error) {
      dispatch({type: ADD_FAVORITE_REJECT});
    }
  };
};
