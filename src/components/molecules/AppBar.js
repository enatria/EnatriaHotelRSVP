/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, View, StyleSheet, SafeAreaView, Image, Pressable} from 'react-native';
import { icons } from '../../assets';
import {colors} from '../../utils';

const AppBar = ({label, bg, noshadow, backArrow, hiddenStatusBar}) => {
  const navigation = useNavigation();
  const statusBarHeight = StatusBar.currentHeight;

  const backArrowBtn = <SafeAreaView>
    <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
      <Image style={styles.arrowIcn} source={icons.BACK_ARROW} />
    </Pressable>
  </SafeAreaView>;

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={bg === 'transparent' ? 'black' : colors.primary}
        hidden={hiddenStatusBar ? true : false}
      />
      {hiddenStatusBar && <View style={styles.hiddenStatusBar(statusBarHeight)} />}
      <View style={noshadow ? styles.appBar(bg) : [styles.appBar(bg), styles.shadow]}>
        {backArrow && backArrowBtn}
        <Text style={bg === 'transparent' ? [styles.text(bg), styles.textShadow] : styles.text(bg)}>{label}</Text>
      </View>
    </>
  );
};

AppBar.defaultProps = {
  label: 'Home',
};

export default AppBar;

const styles = StyleSheet.create({
  appBar: bg => ({
    height: 60,
    width: '100%',
    backgroundColor: bg === 'transparent' ? 'transparent' : colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999,
  }),
  text: bg => ({
    color: bg === 'transparent' ? colors.white : colors.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  }),
  textShadow: {
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 6.27,

    elevation: 10,
  },
  shadow: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.0,

    elevation: 5,
  },
  backArrow: {
    width: 50,
    height: 40,
    position: 'absolute',
    left: -160,
    top: 5,
  },
  arrowIcn: {
    width: 20,
    height: 15,
  },
  hiddenStatusBar: statusBarHeight => ({height: statusBarHeight, backgroundColor: 'transparent'}),
});
