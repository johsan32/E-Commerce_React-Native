import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Input, Text, Icon} from '@ui-kitten/components';
import {Formik} from 'formik';
import MyColors from '../../theme/MyColors';
import {registerSchema} from '../../utils/validations';
import {useDispatch, useSelector} from 'react-redux';
import { userRegister} from '../../store/actions/authAction';
import {MyFonts} from '../../theme/MyFonts';
import { windowHeight } from '../../utils/constans';

const Register = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const {registerPending, isLogin} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);
console.log(isLogin);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Formik
// initialValues={{
//           email: '',
//             username: '',
//             password: '',
//             passwordCheck:"",
//             firstname: '',
//             lastname: '',
//             city: '',
//             phone: '',
// }}
          initialValues={{
            email: 'hasanulusoy78@hotmail.com',
            username: 'hasan32',
            password: 'm38rmF$',
            passwordCheck:"m38rmF$",
            firstname: 'Hasan',
            lastname: 'ULUSOY',
            city: 'İzmit',
            phone: '05052352432',
          }}
          onSubmit={values => dispatch(userRegister({username: 'johnd', password: 'm38rmF$'}
      ))}
          validationSchema={registerSchema}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={{padding: 10, paddingBottom: 100}}>
              <Input
                status={errors.email ? 'danger' : 'basic'}
                size="large"
                style={styles.input}
                placeholder="Email giriniz"
                label="Email"
                keyboardType='email-address'
                value={values.email}
                caption={errors.email}
                onChangeText={handleChange('email')}
              />

              <Input
                status={errors.firstname ? 'danger' : 'basic'}
                size="large"
                style={styles.input}
                placeholder="Adınızı giriniz"
                label="Adı"
                value={values.firstname}
                caption={errors.firstname}
                onChangeText={handleChange('firstname')}
              />
              <Input
                status={errors.lastname ? 'danger' : 'basic'}
                size="large"
                style={styles.input}
                placeholder="Soyadı giriniz"
                label="Soyadı"
                value={values.lastname}
                caption={errors.lastname}
                onChangeText={handleChange('lastname')}
              />
              <Input
                status={errors.username ? 'danger' : 'basic'}
                size="large"
                style={styles.input}
                placeholder="Kullanıcı Adı giriniz"
                label="Kullanıcı Adı"
                value={values.username}
                caption={errors.username}
                onChangeText={handleChange('username')}
              />
              <Input
                status={errors.password ? 'danger' : 'basic'}
                size="small"
                caption={errors.password}
                style={styles.input}
                placeholder="Şifre alanını doldurunuz"
                label="Şifre"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={open ? false : true}
                accessoryRight={props => (
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
              <Input
                status={errors.password ? "danger" : 'basic'}
                size="small"
                caption={errors.passwordCheck}
                style={styles.input}
                placeholder="Şifrenizi tekrar giriniz"
                label="Şifre Tekrarı"
                value={values.passwordCheck}
                onChangeText={handleChange('passwordCheck')}
                secureTextEntry={openPassword ? false : true}
                accessoryRight={props => (
                  <TouchableWithoutFeedback
                    onPress={() => setOpenPassword(!openPassword)}>
                    <Icon
                      {...props}
                      style={styles.icon}
                      fill="#8F9BB3"
                      name={openPassword ? 'eye-off' : 'eye'}
                      pack="eva"
                    />
                  </TouchableWithoutFeedback>
                )}
              />
              <Input
                status={errors.phone ? 'danger' : 'basic'}
                size="large"
                keyboardType="phone-pad"
                caption={errors.phone}
                style={styles.input}
                placeholder="Telefon alanını doldurunuz"
                label="Telefon"
                value={values.phone}
                onChangeText={handleChange('phone')}
              />
              <Input
                status={errors.city ? 'danger' : 'basic'}
                size="large"
                caption={errors.city}
                style={styles.input}
                placeholder="Şehir bilgisi giriniz."
                label="Şehir"
                value={values.city}
                onChangeText={handleChange('city')}
              />
              <Button
                onPress={handleSubmit}
                style={
                  registerPending ? styles.pasiveButton : styles.activeButton
                }
                appearance="filled">
                {registerPending ? (
                  <ActivityIndicator size={'small'} />
                ) : (
                  <Text>Kayıt Ol</Text>
                )}
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default Register;
