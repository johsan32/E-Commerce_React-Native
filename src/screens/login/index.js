import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Input, Text, Icon} from '@ui-kitten/components';
import {Formik} from 'formik';
import MyColors from '../../theme/MyColors';
import {loginSchema} from '../../utils/validations';
import {useDispatch, useSelector} from 'react-redux';
import { userLogin} from '../../store/actions/authAction';
import {HOME, REGISTER} from '../../utils/routes';
import LottieView from 'lottie-react-native';
import {MyFonts} from '../../theme/MyFonts';
import { windowWidth } from '../../utils/constans';


const Login = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const {loginPending, isLogin} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{username: 'johnd', password: 'm38rmF$'}}
        onSubmit={values => dispatch(userLogin(values))}
        validationSchema={loginSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{padding: 10}}>
            <View
              style={{
                height: 250,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LottieView
                source={require('../../assets/animations/register.json')}
                autoPlay
                loop
                style={{height: 350, width: 300}}
              />
            </View>
            <Input
              status={errors.username ? 'danger' : 'basic'}
              size="large"
              style={styles.input}
              textStyle={styles.inputText}
              placeholder="Kullanıcı adınızı giriniz"
              label="Kullanıcı Adı"
              value={values.username}
              caption={errors.username}
              onChangeText={handleChange('username')}
            />

            <Input
              status={errors.password ? 'danger' : 'basic'}
              size="large"
              caption={errors.password}
              style={styles.input}
              placeholder="Şifre alanını doldurunuz"
              label="Şifre"
              textStyle={styles.inputText}
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={open ? false : true}
              accessoryRight={(props) => (
                <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
                  <Icon
                    {...props}
                    style={styles.icon}
                    fill="#8F9BB3"
                    name={open ? 'eye-off' : 'eye'}
                    pack="eva" 
                  />
                </TouchableWithoutFeedback>
              )}
            />     
            <TouchableOpacity
              onPress={handleSubmit}
              style={[
                styles.button,
                loginPending ? styles.pasiveButton : styles.activeButton,
              ]}>
              {loginPending ? (
                <ActivityIndicator size={'large'} />
              ) : (
                <Text style={styles.btnText}>Giriş Yap</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(REGISTER, {
                  username: values.username,
                  password: values.password,
                })
              }
              style={styles.buttonRegister}
              appearance="outline">
              <Text style={styles.btnText}>Kayıt Ol</Text>
            </TouchableOpacity>
            <Button
              status="warning"
              onPress={() => navigation.navigate(HOME)}
              style={styles.btn}
              appearance="outline">
              <Text style={styles.btnText}>Misafir olarak devam et</Text>
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Login;
