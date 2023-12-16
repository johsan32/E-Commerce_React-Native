const {
  FETCH_ADD_FAVORITE,
  ADD_FAVORITE_PENDING,
  ADD_FAVORITE_REJECT,
  REMOVE_FROM_FAVORITE,
} = require('../types/favoriteTypes');

const initialState = {
  favoriteProduct: [],
  pendingFavorite: false,
  errorFavorite: false,
};
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_FAVORITE:
      const index = state.favoriteProduct.findIndex(
        i => i.id === action.payload.id,
      );
      console.log(action.payload);

      if (index >= 0) {
        const clone = [...state.favoriteProduct]
        return {...state, favoriteProduct: clone};
      } else {
        const newArr = state.favoriteProduct.concat({
          ...action.payload,
        });
        return {
          ...state,
          favoriteProduct: newArr,
        };
      }

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

    case REMOVE_FROM_FAVORITE:

        const filtered = state.favoriteProduct.filter(
          item => item.id !== action.payload.id,

          console.log('fillt', filtered),
        );
        return {...state, favoriteProduct: filtered};


    default:
      return state;
  }
};
export default favoriteReducer;
