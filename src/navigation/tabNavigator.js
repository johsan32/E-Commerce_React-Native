import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CATEGORY,
  FAVORITES,
  HOME,
  PROFILE,
  SALES,
} from '../utils/routes';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Favorites from '../screens/favorites';
import TabIcon from '../router/tabIcon';
import HeaderRight from '../router/headerRight';
import MyColors from '../theme/MyColors';
import Category from '../screens/category';
import Sales from '../screens/sales';
import HeaderLeft from '../router/headerLeft';


const Tab = createBottomTabNavigator();
export default function TabNavigator({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => <HeaderRight navigation={navigation} />,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        tabBarActiveTintColor: MyColors.active,
        tabBarInactiveTintColor: MyColors.primary,
        tabBarShowLabel: false,      
      })}>
      <Tab.Screen name={HOME} component={Home} options={{headerLeft:()=><HeaderLeft/>,  headerTitle: '', headerStyle:{backgroundColor:MyColors.product}}}/>
      <Tab.Screen name={SALES} component={Sales} />
      <Tab.Screen name={CATEGORY} component={Category} />
      <Tab.Screen name={FAVORITES} component={Favorites}  />
      <Tab.Screen name={PROFILE} component={Profile} options={{headerShown: false, tabBarHideOnKeyboard:false,}} />
    </Tab.Navigator>
  );
}
