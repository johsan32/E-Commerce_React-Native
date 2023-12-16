import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import MyColors from '../../theme/MyColors';


const CustomButton = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
});

export default CustomButton;
