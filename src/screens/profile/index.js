import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MyColors from '../../theme/MyColors';
import {LOGIN} from '../../utils/routes';
import {userLogOut} from '../../store/actions/authAction';
import {getUserProfile} from '../../store/actions/profileAction';
import LottieView from 'lottie-react-native';
import {MyFonts} from '../../theme/MyFonts';
import Avatar from 'react-native-vector-icons/FontAwesome';
import {windowHeight, windowWidth} from '../../utils/constans';

const Profile = ({navigation}) => {
  const {isLogin} = useSelector(state => state.auth);
  const {profileInfo, pending} = useSelector(state => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile({id: 1}));
  }, []);
  console.log("info", profileInfo);
  return (
    <View style={styles.container}>
      {isLogin ? (
        pending ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} color={MyColors.primary} />
          </View>
        ) : (
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={styles.avatar}
            />
            <View style={styles.content}>
              <Avatar name="user-secret" size={32} color={MyColors.icon} />
              <Text style={styles.textProfile}>{profileInfo?.username}</Text>
            </View>
            <View style={styles.content}>
              <Avatar name="envelope-o" size={32} color={MyColors.icon} />
              <Text style={styles.textInfo}>{profileInfo?.email}</Text>
            </View>

            <View style={styles.content}>
              <Avatar name="user-o" size={32} color={MyColors.icon} />
              <Text style={[styles.textInfo,{textTransform:"capitalize", fontWeight:"bold"}]}>
                {profileInfo?.name?.firstname +
                  ' ' +
                  profileInfo?.name?.lastname}
              </Text>
            </View>
            <View style={styles.content}>
              <Avatar name="map-marker" size={32} color={MyColors.icon} />
              <Text style={[styles.textInfo, {paddingLeft:25, textTransform:"capitalize"}]}>
                {profileInfo?.address?.city}
              </Text>
            </View>
            <View style={styles.content}>
              <Avatar name="phone" size={32} color={MyColors.icon} />
              <Text style={styles.textInfo}>{profileInfo?.phone}</Text>
            </View>
            <View style={{justifyContent:"flex-end"}}>
                          <TouchableOpacity
              onPress={() => dispatch(userLogOut())}
              style={styles.button}>
              <Text style={styles.btnText}>Çıkış Yap</Text>
            </TouchableOpacity>
            </View>

          </View>
        )
      ) : (
        <View style={styles.profileContainer}>
          <LottieView
            source={require('../../assets/animations/login.json')}
            autoPlay
            loop
            style={{height: 150, width: 250, marginTop: 0}}
          />
          <Text style={styles.title}>
            Lütfen Giriş Yaparak Alışveriş Keyfini Yaşayın...
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(LOGIN)}
            style={[styles.button, {backgroundColor:MyColors.primary}]}>
            <Text style={styles.btnText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
});

export default Profile;
