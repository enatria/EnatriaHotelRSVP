/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar, Button, CardBox, InputFields } from '../../components';
import { colors } from '../../utils';


const SignIn = () => {

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

  return (
    <SafeAreaView>
      <AppBar noshadow label={'Sign In'} />
      <View style={styles.extendBar} />
      <View style={styles.loginBar}>
        <CardBox padding center shadow height={350}>
          <SafeAreaView style={styles.widthInput}>
            <Text style={[styles.alignCenter, styles.title]}>Sign in to enatria.</Text>
            <View style={styles.mt12}>
              <InputFields />
            </View>

            <View style={styles.mt12}>
              <InputFields />
            </View>

            <View style={styles.mt12}>
              <Button title={'Sign In'} />
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
