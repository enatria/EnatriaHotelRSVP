/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { TopDestination } from '../../molecules';

const SlideTopDestination = ({label}) => {
  const styles = StyleSheet.create({
    margin: {
      marginTop: 12,
    },
    label: {
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
      marginTop: 12,
      marginHorizontal: 12,
    },
  });
  return (
    <SafeAreaView>
      <Text style={styles.label}>{label}</Text>
      <ScrollView horizontal style={styles.margin}>
        <TopDestination slide />
        <TopDestination slide />
        <TopDestination slide />
        <TopDestination slide />
        <TopDestination slide />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SlideTopDestination;
