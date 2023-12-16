import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import FavoriteItem from '../../components/home/favoriteItem';
import {checkFavorite} from '../../store/actions/favoriActions';
import MyColors from '../../theme/MyColors';
import {windowHeight, windowWidth} from '../../utils/constans';
import {MyFonts} from '../../theme/MyFonts';

const Favorites = ({navigation}) => {
  const {favoriteProduct} = useSelector(state => state?.favorite);
  const {isLogin} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkFavorite);
  }, []);

  console.log('favorite', favoriteProduct);
  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          {favoriteProduct?.length > 0 ? (
            <View>
              <Text style={styles.titleHead}>
                Favori Ürünlerini buradan sepete ekleyebilirsin
              </Text>
              <FlatList
                data={favoriteProduct}
                keyExtractor={item => item.id}
                renderItem={({item}) => <FavoriteItem item={item} />}
              />
            </View>
          ) : (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <LottieView
                source={require('../../assets/animations/favorite.json')}
                autoPlay
                loop
                style={{height: 300, width: 300, marginTop: 0}}
              />
              <Text style={styles.favoriText}>Favori Ürün Bulunamadı!</Text>
            </View>
          )}
        </View>
      ) : (
        <View>
          <Text style={styles.favoriText}>Favori ürünler için giriş yapınız...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
});

export default Favorites;
