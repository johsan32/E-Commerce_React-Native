import { CATEGORIES_URL} from '../../service/urls';
import {getRequest} from '../../service/verb';
import {
  FETCH_CATEGORIES,
  CATEGORIES_PENDING,
  CATEGORIES_REJECT,
} from '../types/categoryTypes';

export const getCategories = params => {
  return async dispatch => {
    dispatch({type: CATEGORIES_PENDING});
    try {
      const response = await getRequest(CATEGORIES_URL, params);
      dispatch({
        type: FETCH_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: CATEGORIES_REJECT});
    }
  };
};

