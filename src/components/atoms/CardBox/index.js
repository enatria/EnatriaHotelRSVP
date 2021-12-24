/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';


const CardBox = ({children, width, height, center, shadow, padding}) => {
  const styles = StyleSheet.create({
    card: {
      width,
      height,

      backgroundColor: '#fff',
      borderRadius: 10,
    },
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.00,

      elevation: 5,
    },
    pading16: {
      padding: 16,
    },
  });

  const centered = center ? [styles.centered, styles.card] : [styles.card];
  const padd16 = padding ? [...centered, styles.pading16] : centered;
  const styleCard = shadow ? [...padd16, styles.shadow] : padd16;

  return (
    <SafeAreaView>
      <View style={styleCard}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default CardBox;
