import { PRODUCTS_URL, PRODUCT_CATEGORY_URL} from '../../service/urls';
import {getRequest, } from '../../service/verb';
import {
  FETCH_PRODUCT_LIST,
  PRODUCT_PENDING,
  PRODUCT_REJECT,
  FETCH_PRODUCT_CATEGORY,
  PRODUCT_CATEGORY_PENDING,
  PRODUCT_CATEGORY_REJECT
} from '../types/productTypes';


export const getProduct = params => {
  return async dispatch => {
    dispatch({type: PRODUCT_PENDING});
    try {
      const response = await getRequest(PRODUCTS_URL);
      dispatch({
        type: FETCH_PRODUCT_LIST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: PRODUCT_REJECT});
    }
  };
};


 export const getProductCategory = params => {
   return async dispatch => {
     dispatch({type: PRODUCT_CATEGORY_PENDING});
     try {
       const response = await getRequest(PRODUCT_CATEGORY_URL +`${params.category}`);
       dispatch({
         type: FETCH_PRODUCT_CATEGORY,
         payload: response.data,
       });
     } catch (error) {
       dispatch({type: PRODUCT_CATEGORY_REJECT});
     }
   };
 };

