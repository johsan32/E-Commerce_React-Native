import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/constans';
import MyColors from '../../theme/MyColors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTCATEGORY} from '../../utils/routes';

export default function Sales() {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            navigation.navigate(PRODUCTCATEGORY, {category: "women's clothing"})
          }>
          <Image
            style={{width: windowWidth - 30, height: windowHeight / 3}}
            resizeMode="contain"
            source={require('../../assets/images/women.webp')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            navigation.navigate(PRODUCTCATEGORY, {category: "men's clothing"})
          }>
          <Image
            style={{width: windowWidth - 30, height: windowHeight / 3}}
            resizeMode="contain"
            source={require('../../assets/images/men.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            navigation.navigate(PRODUCTCATEGORY, {category: 'electronics'})
          }>
          <Image
            style={{width: windowWidth - 30, height: windowHeight / 3}}
            resizeMode="contain"
            source={require('../../assets/images/jewellery.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            navigation.navigate(PRODUCTCATEGORY, {category: 'jewelery'})
          }>
          <Image
            style={{width: windowWidth - 30, height: windowHeight / 3}}
            resizeMode="contain"
            source={require('../../assets/images/friday.png')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
