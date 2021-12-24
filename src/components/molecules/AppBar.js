/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, Text, View, StyleSheet} from 'react-native';
import {colors} from '../../utils';

const AppBar = ({label, bg, noshadow}) => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={bg === 'transparent' ? 'black' : colors.primary}
      />
      <View style={noshadow ? styles.appBar(bg) : [styles.appBar(bg), styles.shadow]}>
        <Text style={styles.text(bg)}>{label}</Text>
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
});
