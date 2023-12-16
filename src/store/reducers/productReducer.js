const {
  FETCH_PRODUCT_LIST,
  PRODUCT_PENDING,
  PRODUCT_REJECT,
  FETCH_ADD_BASKET,
  ADD_BASKET_PENDING,
  ADD_BASKET_REJECT,
  FETCH_PRODUCT_CATEGORY,
  PRODUCT_CATEGORY_PENDING,
  PRODUCT_CATEGORY_REJECT,
  ADD_FAVORITE_PENDING,
  ADD_FAVORITE_REJECT,
  FETCH_ADD_FAVORITE
} = require('../types/productTypes');

const initialState = {
  productList: [],
  productCategory: [],
  favoriteList:[],
  basketList:[],
  pending: false,
  isError: false,
  pendingCategoryList: false,
  isErrorCategoryList: false,
  pendingFavorite:false,
  errorFavorite:false,
  pendingBasket:false,
  errorBasket:false,
  count: 4,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
        pending: false,
      };
    case PRODUCT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case PRODUCT_REJECT:
      return {
        ...state,
        pending: false,
        isError: true,
      };
    case FETCH_PRODUCT_CATEGORY:
      return {
        ...state,
        productCategory: action.payload,
        pendingCategoryList: false,
      };
    case PRODUCT_CATEGORY_PENDING:
      return {
        ...state,
        pendingCategoryList: true,
      };
    case PRODUCT_CATEGORY_REJECT:
      return {
        ...state,
        pendingCategoryList: false,
        isErrorCategoryList: true,
      };
    case FETCH_ADD_BASKET:
      return {
        ...state,
        basketList: action.payload, 
      };
    case ADD_BASKET_PENDING:
      return {
        ...state,
        pendingBasket:true,
      };
    case ADD_BASKET_REJECT:
      return {
        ...state,
        pendingBasket:false,
        errorBasket:true,
      };


      case FETCH_ADD_FAVORITE:
        return {
          ...state,
          favoriteList: action.payload,
          pendingFavorite: false,
        };
      case ADD_FAVORITE_PENDING:
        return {
          ...state,
          pendingFavorite: true,
        };
      case ADD_FAVORITE_REJECT:
        return {
          ...state,
          pendingFavorite: false,
          errorFavorite: true,
        };

    default:
      return state;
  }
};
export default productReducer;
