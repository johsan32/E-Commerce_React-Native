import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import MyColors from '../theme/MyColors';
export default function HeaderLeft() {
  return (
    <View style={{flexDirection: 'row', backgroundColor:MyColors.product}}>
      <Image
        style={{height: 60, width: 120, marginTop: 0}}
        resizeMode="contain"
        source={require('../assets/images/sales.png')}
      />
      <LottieView
        source={require('../assets/animations/logo.json')}
        autoPlay
        loop
        style={{height: 70, width: 80, marginTop: 0}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
