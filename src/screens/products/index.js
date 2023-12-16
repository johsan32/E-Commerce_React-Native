import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HomeItem from '../../components/home/homeItem';
import { getProduct } from '../../store/actions/productAction';

export default function Favorites() {
  const {productList} = useSelector(state => state?.product);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <View style={{flex:1}}> 
      <FlatList
        data={productList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <HomeItem item={item}/>}
      />
      <View>
        <Text>Product</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});