import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/constans';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyColors from '../../theme/MyColors';
import {MyFonts} from '../../theme/MyFonts';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFavorite} from '../../store/actions/favoriActions';
import { addToBasket } from '../../store/actions/basketActions';

const FavoriItem = ({item}) => {
  const dispatch = useDispatch();
  const {basketProduct} = useSelector(
    state => state?.basket,
  );
  const isBasket = basketProduct.some(prod => prod.id === item.id);
  return (
    <View style={styles.container}>
      <View style={styles.sectionImage}>
        <Image
          source={{uri: item?.image}}
          style={{width: '70%', height: '90%'}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.sectionTitle}>
        <Text numberOfLines={3} style={styles.title}>
          {item?.title}
        </Text>
      </View>
      <View style={styles.sectionBottom}>
        <TouchableOpacity
          onPress={() => dispatch(deleteFavorite(item))}
          style={styles.btnDelete}>
          <Icon name="trash-can-outline" size={25} color={MyColors.error} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(addToBasket(item))}
          disabled={isBasket ? true : false}
          style={styles.btnDelete}>
          <Icon name="shopping-outline" size={25} color={isBasket ? MyColors.secondary : MyColors.pending}  />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default FavoriItem;
