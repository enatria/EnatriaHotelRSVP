/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { CardBox } from '../..';

const TopDestinationWithBg = ({slide, name, image}) => {
  const styles = StyleSheet.create({
    slide: {
      marginLeft: 12,
    },
    text: {
      color: '#fff',
      position: 'absolute',
      paddingHorizontal: 10,
      fontWeight: 'bold',
      fontFamily: 'Poppins-Bold',
      alignSelf: 'flex-start',
      bottom: 5,
    },
    imageBg : {
      height: 115,
      width: 115,
      borderRadius: 10,
    },
  });

  return (
    <SafeAreaView style={slide ? styles.slide : ''}>
      <CardBox center>
        <Image source={image} style={styles.imageBg} />
        <Text style={styles.text}>{name}</Text>
      </CardBox>
    </SafeAreaView>
  );
};

export default TopDestinationWithBg;
