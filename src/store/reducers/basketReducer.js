const {
  FETCH_ADD_BASKET,
  ADD_BASKET_PENDING,
  ADD_BASKET_REJECT,
  REMOVE_FROM_BASKET,
  MINUS_AMOUNT,
  PLUS_AMOUNT,
} = require('../types/basketTypes');

const initialState = {
  basketProduct: [],
  pendingBasket: false,
  errorBasket: false,
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_BASKET:
      const index = state.basketProduct.findIndex(
        i => i.id === action.payload.id,
      );
      console.log(action.payload);

      if (index >= 0) {
        const clone = [...state.basketProduct];
        clone[index].amount++;
        return {...state, basketProduct: clone};
      } else {
        const newArr = state.basketProduct.concat({
          ...action.payload,
          amount: 1,
        });
        return {
          ...state,
          basketProduct: newArr,
        };
      }
    case PLUS_AMOUNT:
      const index2 = state.basketProduct.findIndex(
        i => i.id === action.payload.id,
      );

      if (index2 >= 0) {
        const clone2 = [...state.basketProduct];
        clone2[index2].amount++;
        return {
          ...state,
          basketProduct: clone2,
        };
      }
      return state;

    case MINUS_AMOUNT:
      const index3 = state.basketProduct.findIndex(
        i => i.id === action.payload.id,
      );

      if (index3 >= 0) {
        const clone3 = [...state.basketProduct];

        if (clone3[index3].amount > 1) {
          clone3[index3].amount--;
          return {
            ...state,
            basketProduct: clone3,
          };
        }
        return state;
      }

    case ADD_BASKET_PENDING:
      return {
        ...state,
        pendingBasket: true,
      };
    case ADD_BASKET_REJECT:
      return {
        ...state,
        pendingBasket: false,
        errorBasket: true,
      };

    case REMOVE_FROM_BASKET:

        const filtered = state.basketProduct.filter(
          item => item.id !== action.payload.id,

          console.log('fillt', filtered),
        );
        return {...state, basketProduct: filtered};

    default:
      return state;
  }
};
export default basketReducer;
