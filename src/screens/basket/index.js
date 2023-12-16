//import liraries
import React, { useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MyColors from '../../theme/MyColors';
import {LOGIN} from '../../utils/routes';
import {MyFonts} from '../../theme/MyFonts';
import LottieView from 'lottie-react-native';
import {windowHeight, windowWidth} from '../../utils/constans';
import BasketItem from '../../components/home/basketItem';
import {checkBasket} from '../../store/actions/basketActions';

const Basket = ({navigation}) => {
  const {isLogin, token} = useSelector(state => state.auth);
  const {basketProduct} = useSelector(state => state.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkBasket());
  }, []);

  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          {basketProduct?.length > 0 ? (
            <Text style={styles.titleHead}>
              Ürün stokları bitmeden alışverişini tamamla!
            </Text>
          ) : (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <LottieView
                source={require('../../assets/animations/freebasket.json')}
                autoPlay
                loop
                style={{height: 300, width: 300, marginTop: 0}}
              />
               <Text style={styles.basketText}>Sepetin boş</Text>
            </View>
          )}
          <FlatList
            data={basketProduct}
            keyExtractor={item => item.id}
            renderItem={({item}) => <BasketItem item={item} />}
          />
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            source={require('../../assets/animations/loginBasket.json')}
            autoPlay
            loop
            style={{height:300, width: 300, marginTop: 0}}
          />
          <Text style={styles.basketText}>
            Sepetinizdeki ürünler için giriş yapınız...
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
            <Image
              style={{width: 250, height: 250, resizeMode: 'contain'}}
              source={require('../../assets/images/login2.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
});
export default Basket;
