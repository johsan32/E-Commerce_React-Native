const {
  CATEGORIES_PENDING,
  FETCH_CATEGORIES,
  CATEGORIES_REJECT,
} = require('../types/categoryTypes');

const initialState = {
  categories: [],
  pendingCategory: false,
  isErrorCategory: false,
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        pendingCategory: false,
      };
    case CATEGORIES_PENDING:
      return {
        ...state,
        pendingCategory: true,
      };
    case CATEGORIES_REJECT:
      return {
        ...state,
        pendingCategory: false,
        isErrorCategory: true,
      };
    default:
      return state;
  }
};
export default categoryReducer;
