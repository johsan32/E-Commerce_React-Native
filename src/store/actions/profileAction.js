import {PROFILE_INFO_URL} from '../../service/urls';
import {getRequest, postRequest} from '../../service/verb';
import {
  FETCH_USER_INFO,
  USER_INFO_PENDING,
  USER_INFO_REJECT,
} from '../types/profileTypes';

export const getUserProfile = params => {
  return async dispatch => {
    dispatch({type: USER_INFO_PENDING});
    try {
      const response = await getRequest(PROFILE_INFO_URL+`${params.id}`);
      dispatch({
        type: FETCH_USER_INFO,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: USER_INFO_REJECT});
    }
  };
};


