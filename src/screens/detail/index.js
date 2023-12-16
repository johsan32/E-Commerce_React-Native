import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MyColors from '../../theme/MyColors';
import {MyFonts} from '../../theme/MyFonts';
import {windowHeight, windowWidth} from '../../utils/constans';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import { addToBasket } from '../../store/actions/basketActions';
import { addToFavorite } from '../../store/actions/favoriActions';

export default function Detail({route}) {

  const {item} = route.params;
  const dispatch = useDispatch();
  const {favoriteProduct} = useSelector(
    state => state?.favorite,
  );
  const isFavorite = favoriteProduct.some(prod => prod.id === item.id);
  return (
    <View style={styles.container}>
      <View style={{flex: 4}}>
        <Image
          source={{uri: item?.image}}
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.icon}
        onPress={() => dispatch(addToFavorite(item))}
        >
          <Icon name="cards-heart" size={36}  color={isFavorite ? MyColors.pending : MyColors.secondary}  />
        </TouchableOpacity>
      </View>
      <View style={{flex: 3}}>
        <Text style={styles.header}>{item?.title}</Text>
        <Text style={styles.title}>{item?.description}</Text>
      </View>
      <View style={{flex: 1 / 2}}>
        <Text style={styles.info}>{item?.category}</Text>
      </View>
      <View style={styles.bottom}>
        <View
        style={styles.iconView}
       >
          <Icon name="star" size={32} color={'#BDBD00'} />
          <Text style={styles.titleText}>{item?.rating?.rate}</Text>
        </View>
        <View
          style={styles.iconView}>
          <Icon name="emoticon-happy-outline" size={32} color={MyColors.pending} />
          <Text style={styles.titleText}>{item?.rating?.count}</Text>
        </View >
        <View style={styles.iconView}>
        <Icon name="barcode" size={34} color={MyColors.error} />
          <Text style={styles.titleText}>{item.price + ' $'}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}
       onPress={() => dispatch(addToBasket(item))}
      >
        <Text style={styles.btnText}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
});
