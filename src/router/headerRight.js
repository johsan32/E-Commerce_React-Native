import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import MyColors from '../theme/MyColors';
import {BASKET} from '../utils/routes';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyFonts} from '../theme/MyFonts';

const HeaderRight = ({navigation}) => {
  const {isLogin} = useSelector(state => state.auth);
  const {profileInfo} = useSelector(state => state.profile);
  const {basketProduct} = useSelector(state => state.basket);
  return (
    <View style={styles.container}>
      {isLogin ? (
        <View style={styles.basket}>
          <View style={{alignItems:"flex-end", justifyContent:"center", padding:0, margin:0}}>
          <Text style={styles.title}>
            Keyifli alışverişler!
          </Text>
              <Text style={styles.title}>
            {profileInfo?.name?.firstname + ' ' + profileInfo?.name?.lastname}
          </Text>
          </View>       
          <Pressable onPress={() => navigation.navigate(BASKET)}>
            <Icon name="basket" size={32} color={MyColors.primary} />
            { basketProduct?.length > 0 && (
              <View style={styles.count}>
                <Text style={{color: MyColors.white, fontSize: 12}}>
                  { basketProduct?.length}
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={() => navigation.navigate(BASKET)}>
        <Icon name="basket-outline" size={30} color={MyColors.primary} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
});

export default HeaderRight;
