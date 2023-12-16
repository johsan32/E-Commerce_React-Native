import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/constans';
import Icon from 'react-native-vector-icons/AntDesign';
import MyColors from '../../theme/MyColors';
import {MyFonts} from '../../theme/MyFonts';
import {useDispatch} from 'react-redux';
import {
  deleteProduct,
  minusAmount,
  plusAmount,
} from '../../store/actions/basketActions';
const BasketItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.sectionImage}>
        <Image
          source={{uri: item.image}}
          style={{width: '70%', height: '90%'}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.sectionTitle}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.sectionBottom}>
          <View style={styles.sectionAmount}>
            <TouchableOpacity
              style={{}}
              onPress={() => dispatch(minusAmount(item))}>
              <Icon
                name="minuscircleo"
                size={24}
                color={MyColors.warning}
                style={{}}
              />
            </TouchableOpacity>

            <Text style={styles.amount}>{item?.amount}</Text>
            <TouchableOpacity onPress={() => dispatch(plusAmount(item))}>
              <Icon name="pluscircleo" size={24} color={MyColors.pending} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => dispatch(deleteProduct(item))}
              style={styles.btnDelete}>
              <Icon name="delete" size={24} color={MyColors.error} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default BasketItem;
