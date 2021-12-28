/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppBar, Button, CardBox, InputFields} from '../../components';
import {colors, Login} from '../../utils';

const SignIn = ({navigation}) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 20,
    },
    extendBar: {height: 120, backgroundColor: colors.primary},
    loginBar: {margin: 12, position: 'relative', top: -40},
    widthInput: {width: 300},
    mt12: {marginTop: 12},
    alignCenter: {alignSelf: 'center'},
  });

  const data = {username, password};
  console.log(data);
  const handleLogin = async () => {
    try {
      let res = await Login('https://fakestoreapi.com/auth/login', data);
      console.log(res.data);
      navigation.navigate('HomeScreen');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <AppBar noshadow label={'Sign In'} />
      <View style={styles.extendBar} />
      <View style={styles.loginBar}>
        <CardBox padding center shadow height={350}>
          <SafeAreaView style={styles.widthInput}>
            <Text style={[styles.alignCenter, styles.title]}>
              Sign in to enatria.
            </Text>
            <View style={styles.mt12}>
              <InputFields
                inlineIcon={'ic_avatar'}
                value={username}
                onChangeText={onChangeUsername}
                placeHolder={'Username'}
              />
            </View>

            <View style={styles.mt12}>
              <InputFields
                inlineIcon={'ic_padlock'}
                value={password}
                onChangeText={onChangePassword}
                placeHolder={'Password'}
              />
            </View>

            <View style={styles.mt12}>
              <Button title={'Sign In'} onPress={handleLogin} />
            </View>

            <View style={styles.mt12}>
              <Text style={styles.alignCenter}>Forgot your Password?</Text>
            </View>
          </SafeAreaView>
        </CardBox>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
