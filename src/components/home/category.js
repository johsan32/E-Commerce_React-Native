import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyColors from '../../theme/MyColors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTCATEGORY} from '../../utils/routes';
import { MyFonts } from '../../theme/MyFonts';

export default function CategoryBanner() {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            navigation.navigate(PRODUCTCATEGORY, { category: "women's clothing" })
          }>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require('../../assets/images/women.png')}
          />
           <Text style={styles.title}>women's clothing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            navigation.navigate(PRODUCTCATEGORY, { category: "men's clothing" })
          }>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require('../../assets/images/men2.png')}
          />
           <Text style={styles.title}>men's clothing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            navigation.navigate(PRODUCTCATEGORY, { category: 'jewelery' })
          }>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require('../../assets/images/jewel.png')}
          />
           <Text style={styles.title}>jewelery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() =>
            navigation.navigate(PRODUCTCATEGORY, { category: 'electronics' })
          }>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require('../../assets/images/elect.png')}
          />
          <Text style={styles.title}>electronics</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
  });
  