import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../store/actions/categoryActions';
import Spinner from '../../components/uı/spinner';

const Category = () => {
  const {pendingCategory, categories} = useSelector(state => state?.category);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={styles.container}>
      {pendingCategory ? (
        <Spinner />
      ) : (
        <FlatList
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => <CategoryItem item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
});
export default Category;
