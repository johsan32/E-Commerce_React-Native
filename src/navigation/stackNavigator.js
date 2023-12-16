import Products from '../screens/products';
import Favorites from '../screens/favorites';
import Detail from '../screens/detail';
import React, {useEffect} from 'react';
import {
  FAVORITES,
  HOME,
  PRODUCTS,
  DETAIL,
  LOGIN,
  BASKET,
  REGISTER,
  PRODUCTCATEGORY,
} from '../utils/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import Login from '../screens/login';
import Basket from '../screens/basket';
import {useDispatch} from 'react-redux';
import {checkUserLogin} from '../store/actions/authAction';
import Register from '../screens/register';
import ProductCategory from '../screens/productCategory';
import {MyFonts} from '../theme/MyFonts';
import MyColors from '../theme/MyColors';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);

  return (
    <Stack.Navigator >
      {/* <Stack.Screen name={INTRO} component={Intro} options={{headerShown:false}} /> */}
      <Stack.Screen
        name={HOME}
        component={TabNavigator}       
        options={{headerShown: false, headerStyle:{backgroundColor:MyColors.black}}}       
      />
      <Stack.Screen name={PRODUCTS} component={Products} />
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{
          headerShown: false,
          headerShadowVisible: false,
          autoHideHomeIndicator: false,        
        }}
      />
      <Stack.Screen name={FAVORITES} component={Favorites} />
      <Stack.Screen name={DETAIL} component={Detail} />
      <Stack.Screen name={BASKET} component={Basket} />
      <Stack.Screen
        options={({route}) => ({
          title: route.params.category.toUpperCase(),
          headerShown: true,
          headerTitleStyle: {
            color: 'red',
            fontSize: 20,
            fontFamily: MyFonts.fontPoppinsB,
          },
        })}
        name={PRODUCTCATEGORY}
        component={ProductCategory}
      />
      <Stack.Screen name={REGISTER} component={Register} />
    </Stack.Navigator>
  );
}
