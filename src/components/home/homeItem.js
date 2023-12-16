import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {windowHeight, windowWidth} from '../../utils/constans';
import CustomButton from '../uı/button';
import MyColors from '../../theme/MyColors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MyFonts} from '../../theme/MyFonts';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from '../../utils/routes';
import {checkBasket, addToBasket } from '../../store/actions/basketActions';
import { addToFavorite } from '../../store/actions/favoriActions';

const HomeItem = ({item}) => {
  const navigation = useNavigation();
  const {isLogin} = useSelector(state => state.auth);
  const {favoriteProduct} = useSelector(
    state => state?.favorite,
  );

  const isFavorite = favoriteProduct.some(prod => prod.id === item.id);

  const dispatch = useDispatch();

  const handlePress = (item) => {
      dispatch(addToBasket(item));
      dispatch(checkBasket());
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(DETAIL, {item: item})}>
          <Image
            style={{
              width: windowWidth / 2 - 40,
              height: windowHeight / 8,
              resizeMode: 'contain',
              padding: 10,
            }}
            source={{
              uri: item?.image,
            }}
          />
        </TouchableOpacity>
        {isLogin && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => dispatch(addToFavorite(item))}>
            <Icon name="cards-heart" size={25} color={isFavorite ? MyColors.pending : MyColors.secondary} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={4} style={styles.description}>
          {item.description}
        </Text>
        {isLogin && (
          <View>
            <View style={styles.bottom}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="star" size={25} color={MyColors.pending} />
                <Text style={styles.title}>{item?.rating?.rate}</Text>
              </View>
              <View>
                <Text style={styles.title}>{item.price + ' $'}</Text>
              </View>
            </View>
            <View>
              <CustomButton
                title="Sepete Ekle"
                onPress={() => handlePress(item)}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default HomeItem;
