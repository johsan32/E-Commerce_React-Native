import {combineReducers} from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import basketReducer from './basketReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  auth: authReducer,
  profile: profileReducer,
  basket: basketReducer,
  favorite: favoriteReducer,
});
export default rootReducer;
