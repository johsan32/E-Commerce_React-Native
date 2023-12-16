import { ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { HOME } from '../../utils/routes';

const Intro = ({navigation}) => {

    useEffect(()=>{
        setTimeout(() => {
        navigation.navigate(HOME)
        }, 1000);
    },[])
  return (
    <ImageBackground source={require("../../assets/images/intro2.png")} style={styles.container} resizeMode='cover' /> 
  )
}

export default Intro
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
})