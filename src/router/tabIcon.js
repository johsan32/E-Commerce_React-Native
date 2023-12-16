import React from 'react';
import {CATEGORY, FAVORITES, HOME, PROFILE, SALES} from '../utils/routes';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from 'react-native-vector-icons/AntDesign';
import Profile from 'react-native-vector-icons/MaterialIcons';
import Sales from 'react-native-vector-icons/Fontisto';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import MyColors from '../theme/MyColors';
import { MyFonts } from '../theme/MyFonts';

const TabIcon = ({name, focused, color, size}) => {
  const { favoriteProduct } = useSelector(state => state.favorite);

  if (name === HOME) {
    return (
      <Home name="home" size={focused? 35 : 30} color={color} />
    );
  } else if (name === SALES) {
    return (
      <Sales name={focused ? "shopping-package" : "shopping-sale"} size={focused? 35 : 30} color={color} />
    );
  } else if (name === CATEGORY) {
    return (
      <MaterialIcon name={focused ? "select-group" : "select-all"} size={focused? 35 : 30} color={color} />
    );
  } else if (name === FAVORITES) {
    const favoritesCount = favoriteProduct.length > 0 ? favoriteProduct.length : '';
    return (
      <View>
        <MaterialIcon name={focused ? "heart-plus" : "heart-plus-outline"} size={focused ? 35 : 30} color={color} />
        {favoritesCount ? (
          <View
            style={{
              position: 'absolute',
              top: -5,
              right: -10,
              backgroundColor: MyColors.pending, // İsteğinize göre arka plan rengini ve diğer stilleri ayarlayabilirsiniz
              borderRadius: 10,
              width: 20,
              height:20,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <Text style={{ color: MyColors.white, fontFamily:MyFonts.fontPoppinsB, fontSize: 13 }}>{favoritesCount}</Text>
          </View>
        ) : null}
      </View>
    );
  }else if (name === PROFILE) {
    return (
      <Profile name={focused ? "person" : "person-outline"} size={focused? 35 : 30}  color={color} />
    );
  }
};

export default TabIcon;
