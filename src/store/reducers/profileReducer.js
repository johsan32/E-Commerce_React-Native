const {
    FETCH_USER_INFO,
    USER_INFO_PENDING,
    USER_INFO_REJECT
  } = require('../types/profileTypes');
  
  const initialState = {
    profileInfo: {},
    pending: false,
    isError: false,
  };
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_INFO:
        return {
          ...state,
          profileInfo: action.payload,
          pending: false,
        };
      case USER_INFO_PENDING:
        return {
          ...state,
          pending: true,
        };
      case USER_INFO_REJECT:
        return {
          ...state,
          pending: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  export default profileReducer;
  