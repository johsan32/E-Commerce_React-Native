import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Spinner} from '@ui-kitten/components';

const CustomSpinner = () => {
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default CustomSpinner;
