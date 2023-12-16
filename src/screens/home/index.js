import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HomeItem from '../../components/home/homeItem';
import {getProduct} from '../../store/actions/productAction';

export default function Home() {
  const {productList} = useSelector(state => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <View style={styles.container}>
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          data={productList}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => <HomeItem item={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
});
