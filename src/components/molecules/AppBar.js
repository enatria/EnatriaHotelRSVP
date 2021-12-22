/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, Text, View, StyleSheet} from 'react-native';
import {colors} from '../../utils';

const AppBar = ({label, bg}) => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={bg === 'transparent' ? 'black' : colors.primary}
      />
      <View style={styles.appBar(bg)}>
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
  }),
  text: bg => ({
    color: bg === 'transparent' ? colors.light : colors.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  }),
});
