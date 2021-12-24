/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { CardBox } from '../..';

const TopDestination = ({slide}) => {
  const styles = StyleSheet.create({
    slide: {
      marginLeft: 12,
    },
  });

  return (
    <SafeAreaView style={slide ? styles.slide : ''}>
      <CardBox center width={100} height={50}>
        <Text>Jakarta</Text>
      </CardBox>
    </SafeAreaView>
  );
};

export default TopDestination;
