/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { CardBox } from '../..';

const TopDestination = ({slide, name}) => {
  const styles = StyleSheet.create({
    slide: {
      marginLeft: 12,
    },
    pd: {
      paddingHorizontal: 10,
    },
  });

  return (
    <SafeAreaView style={slide ? styles.slide : ''}>
      <CardBox center height={50}>
        <Text style={styles.pd}>{name}</Text>
      </CardBox>
    </SafeAreaView>
  );
};

export default TopDestination;
